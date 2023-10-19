import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';

import { ReportesService } from 'src/app/services/reportes.service';
 
import html2canvas from "html2canvas";
import { ReporteService } from '../services/reporte.service';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-detalle-reportes',
  templateUrl: './detalle-reportes.component.html',
  styleUrls: ['./detalle-reportes.component.scss']
})
export class DetalleReportesComponent {

  @ViewChild('pdfTable', { static: false }) el!: ElementRef;
  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  informacionData: any;

  private readonly _reporte = inject(ReporteService);
  private readonly router = inject(Router);
  @Input() id?: number;



  ngOnInit(): void {
    this.getReportes()
  }

  getReportes() {
    this._reporte.getReporteID(this.id).subscribe({
      next: (value: any) => {
        this.informacionData = value[0]
        console.log(value);
        
      },
      error: (err) => {

      },
    })
  }



  back(): void {
    this.router.navigate(['/reportesAlta/lista']);
  }

  pdf() {

    let pdf = new jsPDF("p", "mm", "a4")

    // pdf.html(this.el.nativeElement,{
    //   callback:(pdf)=>{
    //     pdf.save()
    //   }
    // })

    const data = document.getElementById("pdfTable")!;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL("image/png");

      // let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });

  }

  descargarPDF() {
    let templatTipo = ''
    if (this.informacionData.tipoReporte == 'Recorrido' || !this.informacionData.tipoReporte) {
      templatTipo = 'Recorrido'
    } else if (this.informacionData.tipoReporte == 'Baja') {
      templatTipo = 'Baja'
    } else if (this.informacionData.tipoReporte == 'Mantenimiento Preventivo' || this.informacionData.tipoReporte == 'Mantenimiento Correctivo') {
      templatTipo = 'Mantenimiento'
    }

    this._reporte.descargarPDF(this.id,templatTipo)
    
  }

  verPDF() {
    let templatTipo = ''

    if (this.informacionData.tipoReporte == 'Recorrido' || !this.informacionData.tipoReporte) {
      templatTipo = 'Recorrido'
    } else if (this.informacionData.tipoReporte == 'Baja') {
      templatTipo = 'Baja'
    } else if (this.informacionData.tipoReporte == 'Mantenimiento Preventivo' || this.informacionData.tipoReporte == 'Mantenimiento Correctivo') {
      templatTipo = 'Mantenimiento'
    }
    this._reporte.verPDF(this.id, templatTipo)
  }
}
