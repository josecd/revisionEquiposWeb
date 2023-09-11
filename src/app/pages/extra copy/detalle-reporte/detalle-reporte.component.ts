import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
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

import html2canvas from "html2canvas";
export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical',
  },
];

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.component.html',
  styleUrls: ["./style.css"],
})
export class AppDetalleReporteComponent implements OnInit {

  @ViewChild('pdfTable', { static: false }) el!: ElementRef;
  displayedColumns: string[] = ['assigned', 'name', 'priority', 'budget'];
  dataSource = ELEMENT_DATA;
  id: number;
  private sub: any;

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
  constructor(
    private _reporte: ReportesService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log('Este es el id', this.id);

      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit(): void {
    this.getReportes()
  }

  getReportes() {
    this._reporte.getReporteID(this.id).subscribe({
      next: (value: any) => {
        this.informacionData = value[0]
        console.log(this.informacionData);

      },
      error: (err) => {

      },
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  back(): void {
    this.router.navigate(['/extras/sample-mypage']);
  }

  pdf() {

    let pdf = new jsPDF

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
      console.log(contentDataURL);

      // let pdf = new jspdf("p", "mm", "a4"); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
      pdf.save("MYPdf.pdf"); // Generated PDF
    });

  }

  descargarPDF() {
    this._reporte.descargarPDF(this.id)
  }

  verPDF() {
    let templatTipo = ''

    if (this.informacionData.tipoReporte == 'Recorrido') {
      templatTipo = 'Recorrido'
    } else if (this.informacionData.tipoReporte == 'Baja') {
      templatTipo = 'Baja'
    } else if (this.informacionData.tipoReporte == 'Mantenimiento Preventivo' || this.informacionData.tipoReporte == 'Mantenimiento Correctivo') {
      templatTipo = 'Mantenimiento'
    }
    this._reporte.verPDF(this.id, templatTipo)
  }
}
