import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
} from 'ng-apexcharts';
import { ReportesService } from 'src/app/services/reportes.service';
import * as XLSX from 'xlsx';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}
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
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ["./style.css"],
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
export class AppSamplePageComponent implements OnInit {


  displayedColumns: string[] = ['select', 'assigned', 'name', 'priority', 'budget', 'accion'];
  displayedColumnsReporte: string[] = ['select', 'usuario', 'descripcion', 'hotel', 'fechaRegistro'];
  selection = new SelectionModel<any>(true, []);

  dataSource2 = new MatTableDataSource([]);


  //Date
  info: any
  date = new FormControl(moment());
  dp: any


  mes: any
  anio: any
  hotel: any
  toppings: any = new FormControl('');

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  hoteles: any = [];
  hotelesSeleccionados: any;

  constructor(
    private _reporte: ReportesService,
    private router: Router
  ) {
    // this.sixMonthsAgo.setMonth(this.today.getMonth());
  }

  ngOnInit(): void {
    this.mes = moment().month()
    this.anio = moment().year();
    this.getReportes();
    this.getHoteles();
  }

  setMonthAndYear(normalizedMonthAndYear: any, datepicker: MatDatepicker<any>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    this.mes = this.date.value?.month()
    this.anio = this.date.value?.year();
    datepicker.close();
  }

  getReportes() {
    const filtros: any = {
      mes: this.mes + 1,
      anio: this.anio,
      hotel: ''
    }
    this._reporte.reportesFiltro(filtros).subscribe({
      next: (value: any) => {
        this.dataSource2 = new MatTableDataSource(value);
      },
      error: (err) => {

      },
    })

  }

  getHoteles() {
    this._reporte.hotelesLista().subscribe({
      next: (value: any) => {
        this.hoteles = value
      },
      error: (err) => {

      },
    })
  }
  getRecord(dato: any) {
    this.router.navigate(['/extras/detalle', dato.idReporte]);
  }

  exportexcel(): void {
    console.log(this.selection);

    const fileName = 'ExcelSheet.xlsx';
    /* table id is passed over here */
    let element = document.getElementById('table');
    console.log(element);

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    console.log(ws);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, fileName);

  }

  exportData() {
    var selectedRows: any = this.selection['_selected']
    console.log(selectedRows);

    var rows = [['EQUIPO', 'MARCA', 'MODELO', 'N° SERIE', 'ÁREA','CRITICIDAD','HOTEL','OBSERVACIÓN', 'RECOMENDACIONES','COMENTARIO DE GERENCIA','CRÍTICO BAJO','CRÍTICO ALTO'],];
    selectedRows.forEach(async (element: any) => {
          let criBajo=0
          let criAlto=0


          for (var i = 0; i < element['observaciones'].length; ++i) {
            var aux = []
            criBajo= element['observaciones'][i]['criticidad'] == 'Bajo'?criBajo+1:criBajo;
            criAlto= element['observaciones'][i]['criticidad'] == 'Alto'?criAlto+1:criAlto;
            console.log(criBajo,criAlto);
            
            aux.push(element['observaciones'][i]['equipo']) //EQUIPO
            aux.push(element['observaciones'][i]['equipo']) //MARCA
            aux.push(element['observaciones'][i]['modelo']) //MODELO
            aux.push(element['observaciones'][i]['numeroSerie']) //N° SERIE
            aux.push(element['observaciones'][i]['area']) //ÁREA
            aux.push(element['observaciones'][i]['criticidad']) //CRITICIDAD
            aux.push(element['hoteles']['nombre']) //HOTEL
            aux.push(element['observaciones'][i]['observacion']) //OBSERVACIÓN
            aux.push(element['observaciones'][i]['comentarios'].map((e: any) => { return e.comentario+'/' }).toString()) //RECOMENDACIONES(COMENTARIOS)
            aux.push('') //comentario(recomendacion general)
            rows.push(aux)
          }

          var aux = []
          aux.push('') //EQUIPO
          aux.push('') //MARCA
          aux.push('') //MODELO
          aux.push('') //N° SERIE
          aux.push('') //ÁREA
          aux.push('') //CRITICIDAD
          aux.push() //HOTEL
          aux.push('') //OBSERVACIÓN
          aux.push('') //RECOMENDACIONES(COMENTARIOS)
          aux.push('') //RECOMENDACIONES(COMENTARIOS)
          aux.push(element['recomendaciones']) //comentario(recomendacion general)
          aux.push(criBajo) //CRÍTICO BAJO
          aux.push(criAlto) //CRÍTICO ALTO

          rows.push(aux)
    });

    console.log(rows);
    
    this.exportToCsv('Lista_Mantenimientos.csv', rows)

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
    console.log(event);

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filterValue.trim().toLowerCase();
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
    
    this._reporte.reportesFiltro(filtros).subscribe({
      next: (value: any) => {
        console.log(value);

        this.dataSource2 = new MatTableDataSource(value);
      },
    })
  }

}
