import { Component, inject } from '@angular/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MY_FORMATS } from '../../extra copy/sample-page/sample-page.component';
import { MatTableDataSource } from '@angular/material/table';
import { InventarioService } from '../services/inventario.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { ReportesService } from 'src/app/services/reportes.service';
import { Router } from '@angular/router';
const moment = _moment;
@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.scss'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class ListaInventarioComponent {
  displayedColumns: string[] = ['select', 'marca', 'equipo', 'locacion', 'fecha','accion'];
  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel<any>(true, []);


  //Date
  info: any
  date = new FormControl(moment());
  dp: any

  mes: any
  anio: any
  hotel: any
  toppings: any = new FormControl('');

  hoteles: any = [];
  hotelesSeleccionados: any;
  private readonly _inventario= inject(InventarioService);
  private readonly _reporte= inject(ReportesService);
  private readonly router= inject(Router);
  


  ngOnInit(): void {
    this.mes = moment().month()
    this.anio = moment().year();
    this.getInventario();
    this.getHoteles();
  }

  getRecord(dato: any) {
    this.router.navigate(['/inventario/detalle', dato.idInventario]);
  }

  getInventario() {
    const filtros: any = {
      mes: this.mes + 1,
      anio: this.anio,
      hotel: ''
    }
    this._inventario.getInventarioFiltro(filtros).subscribe({
      next: async (data: any) => {
        this.dataSource = new MatTableDataSource(data);
      },
      error(err) { },
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  getHoteles() {
    this._reporte.hotelesLista().subscribe({
      next: (value: any) => {
        this.hoteles = value
      },
      error: (err) => {

      },
    }).unsubscribe( )
  }

  ///Filtros
  setMonthAndYear(normalizedMonthAndYear: any, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    this.mes = this.date.value?.month()
    this.anio = this.date.value?.year();
    datepicker.close();
  }
  buscar() {
    this.selection.clear();

    this.hotelesSeleccionados = '';
    console.log(this.toppings);

    const datos: any = this.toppings.value
    this.hotelesSeleccionados = datos ? datos.map((e: any) => { return e.idHotel }) : ''
    console.log(this.hotelesSeleccionados);

    const filtros: any = {
      mes: this.mes + 1,
      anio: this.anio,
      hotel: this.hotelesSeleccionados.toString() || ''
    }
    console.log(filtros);

    this._inventario.getInventarioFiltro(filtros).subscribe({
      next: (value: any) => {
        console.log(value);
        
        this.dataSource = new MatTableDataSource(value);
      },
    })
  }

  ///export data
  exportData() {
    var selectedRows: any = this.selection['_selected']
    var rows = [['EQUIPO', 'MARCA', 'Hotel', 'DESCRIPCIÓN', 'N° PARTE', 'URL',],];
    selectedRows.forEach(async (element: any) => {


      for (var i = 0; i < element['partes'].length; ++i) {
        var aux1 = []
        aux1.push(element['equipo']) //EQUIPO
        aux1.push(element['marca']) //MARCA
        aux1.push(element['hoteles']['nombre']) //HOTEL
        aux1.push(element['partes'][i]['descripcion']) //MARCA
        aux1.push(element['partes'][i]['noParte']) //noParte
        aux1.push(element['partes'][i]['partesImagen'] ? element['partes'][i]['partesImagen'][0]['url'] : '') //img
        rows.push(aux1)
      }

      var aux = []
      aux.push('') //EQUIPO
      aux.push('') //MARCA
      aux.push('') //Hotel
      aux.push('') //Descripcion
      aux.push('') //noParte
      aux.push('') //img
      rows.push(aux)
    });
    this.exportToCsv('reporte.csv', rows)

  }

  exportToCsv(filename: any, rows: any) {
    var processRow = function (row: any) {
      var finalVal = '';
      for (var j = 0; j < row.length; j++) {
        var innerValue = row[j] === null || row[j] === undefined ? '' : row[j].toString();
        if (row[j] instanceof Date) {
          innerValue = row[j].toLocaleString();
        };
        var result = innerValue.replace(/"/g, '""');
        if (result.search(/("|,|\n)/g) >= 0)
          result = '"' + result + '"';
        if (j > 0)
          finalVal += ',';
        finalVal += result;
      }
      return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
      csvFile += processRow(rows[i]);
    }

    var blob = new Blob(["\uFEFF" + csvFile], { type: 'text/csv;charset=utf-8;' });

    var link = document.createElement("a");
    if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", filename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}