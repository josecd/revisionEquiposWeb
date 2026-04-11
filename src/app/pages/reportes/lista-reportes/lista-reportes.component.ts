import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';

const moment = _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { ReporteService } from '../services/reporte.service';

@Component({
  selector: 'app-lista-reportes',
  templateUrl: './lista-reportes.component.html',
  styleUrls: ['./lista-reportes.component.scss'],
  host: {ngSkipHydration: 'true'},
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ListaReportesComponent implements OnInit {
  private readonly _reporte = inject(ReporteService);
  private readonly router = inject(Router);
  private readonly _snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ['select', 'id', 'assigned', 'name', 'priority', 'budget', 'firmas', 'accion'];
  selection = new SelectionModel<any>(true, []);
  dataSource2 = new MatTableDataSource<any>([]);
  isLoading = false;

  date = new FormControl(moment());
  mes: any;
  anio: any;
  toppings: any = new FormControl('');
  hoteles: any[] = [];
  hotelesSeleccionados: any;
  

  ngOnInit(): void {
    this.mes = moment().month();
    this.anio = moment().year();
    this.getReportes();
    this.getHoteles();
  }

  setMonthAndYear(normalizedMonthAndYear: any, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    this.mes = this.date.value?.month();
    this.anio = this.date.value?.year();
    datepicker.close();
    this.buscar();
  }

  getReportes() {
    this.isLoading = true;
    const filtros: any = { mes: this.mes + 1, anio: this.anio, hotel: '' };
    this._reporte.reportesFiltro(filtros).subscribe({
      next: (value: any) => {
        this.dataSource2 = new MatTableDataSource(value);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this._snackBar.open('Error al cargar los reportes', 'Cerrar', { duration: 4000 });
      },
    });
  }

  getHoteles() {
    this._reporte.hotelesLista().subscribe({
      next: (value: any) => { this.hoteles = value; },
      error: () => {
        this._snackBar.open('Error al cargar la lista de hoteles', 'Cerrar', { duration: 4000 });
      },
    });
  }
  getRecord(dato: any) {
    this.router.navigate(['/reportes/detalle', dato.idReporte]);
  }

  exportData() {
    const selectedRows: any[] = this.selection.selected;
    if (!selectedRows.length) {
      this._snackBar.open('Selecciona al menos un reporte para exportar', 'Cerrar', { duration: 3000 });
      return;
    }

    const rows: any[][] = [['ID', 'EQUIPO', 'REPORTE', 'MARCA', 'MODELO', 'N° SERIE', 'ÁREA', 'CRITICIDAD', 'HOTEL', 'USUARIO', 'OBSERVACIÓN', 'RECOMENDACIONES', 'DIAGNÓSTICO TÉCNICO', 'FALLAS DETECTADAS DURANTE EL SERVICIO', 'FIRMA DE CONFORMIDAD', 'COMENTARIO A LA ENTREGA DEL EQUIPO', 'COMENTARIO DE GERENCIA', 'NO CRÍTICO', 'CRÍTICO', 'FIRMAS']];
    selectedRows.forEach((element: any) => {
      let criBajo = 0;
      let criAlto = 0;
      const firmas = element['firmas'].length;

      for (let i = 0; i < element['observaciones'].length; ++i) {
        const obs = element['observaciones'][i];
        criBajo = obs['criticidad'] === 'Bajo' ? criBajo + 1 : criBajo;
        criAlto = obs['criticidad'] === 'Alto' ? criAlto + 1 : criAlto;
        const esMantenimiento = obs['tipoReporte']?.includes('Mantenimiento');
        const esPreventivo = obs['tipoReporte'] === 'Mantenimiento Preventivo';
        rows.push([
          element['idReporte'],
          obs['equipo'],
          obs['tipoReporte'],
          obs['marca'],
          obs['modelo'],
          obs['numeroSerie'],
          obs['area'],
          obs['criticidad'],
          element['hoteles']['nombre'],
          element['usuario']['nombre'],
          obs['observacion'],
          obs['comentarios'].map((e: any) => e.comentario + '/').toString(),
          esMantenimiento ? obs['diagnosticoTecnico'] : '',
          esMantenimiento ? obs['fallaDetectadaDuraSer'] : '',
          esPreventivo ? (obs['fimaConformidad'] === true ? 'SI' : 'NO') : '',
          esMantenimiento ? obs['comentariosEntregaEquip'] : '',
          '',
        ]);
      }

      rows.push(['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', element['recomendaciones'], criBajo, criAlto, firmas]);
    });

    this.exportToCsv('reporte.csv', rows);
    this._snackBar.open(`${selectedRows.length} reporte(s) exportado(s) correctamente`, 'OK', { duration: 3000 });
  }

  exportToCsv(filename: string, rows: any[][]) {
    const processRow = (row: any[]) => {
      let finalVal = '';
      for (let j = 0; j < row.length; j++) {
        let innerValue = row[j] === null || row[j] === undefined ? '' : row[j].toString();
        if (row[j] instanceof Date) { innerValue = row[j].toLocaleString(); }
        let result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0) result = '"' + result + '"';
        if (j > 0) finalVal += ',';
        finalVal += result;
      }
      return finalVal + '\n';
    };

    let csvFile = '';
    for (const row of rows) { csvFile += processRow(row); }

    const blob = new Blob(['\uFEFF' + csvFile], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  getTipoClass(tipo: string): string {
    if (!tipo) return 'chip-default';
    if (tipo === 'Recorrido') return 'chip-recorrido';
    if (tipo === 'Baja') return 'chip-baja';
    if (tipo === 'Mantenimiento Preventivo') return 'chip-preventivo';
    if (tipo === 'Mantenimiento Correctivo') return 'chip-correctivo';
    return 'chip-default';
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource2.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
  }

  buscar() {
    this.selection.clear();
    this.isLoading = true;
    const datos: any = this.toppings.value;
    this.hotelesSeleccionados = datos ? datos.map((e: any) => e.idHotel) : '';

    const filtros: any = {
      mes: this.mes + 1,
      anio: this.anio,
      hotel: this.hotelesSeleccionados.toString() || '',
    };

    this._reporte.reportesFiltro(filtros).subscribe({
      next: (value: any) => {
        this.dataSource2 = new MatTableDataSource(value);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this._snackBar.open('Error al buscar los reportes', 'Cerrar', { duration: 4000 });
      },
    });
  }

}
