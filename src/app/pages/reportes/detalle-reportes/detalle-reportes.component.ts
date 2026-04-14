import { Component, ViewEncapsulation, ViewChild, OnInit, OnChanges, SimpleChanges, ElementRef, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';

import { ReportesService } from 'src/app/services/reportes.service';
 
import html2canvas from "html2canvas";
import { ReporteService } from '../services/reporte.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenService } from 'src/app/services/token.service';
import { VerificarTextoDialogComponent } from './verificar-texto-dialog/verificar-texto-dialog.component';
import { EditarComentarioDialogComponent } from './editar-comentario-dialog/editar-comentario-dialog.component';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-detalle-reportes',
  templateUrl: './detalle-reportes.component.html',
  styleUrls: ['./detalle-reportes.component.scss']
})
export class DetalleReportesComponent implements OnChanges {

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
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly tokenService = inject(TokenService);
  @Input() id?: number;

  // --- Estado de edición inline ---
  editModes: { [idObservacion: number]: boolean } = {};
  editData: { [idObservacion: number]: any } = {};
  guardando: { [idObservacion: number]: boolean } = {};
  verificando: { [key: string]: boolean } = {};  // key: `${idObservacion}-${campo}`

  imgAmpliadaUrl: string | null = null;
  zoomLevel = 1;
  imgTranslateX = 0;
  imgTranslateY = 0;
  private isDragging = false;
  private dragStartX = 0;
  private dragStartY = 0;
  private dragOriginX = 0;
  private dragOriginY = 0;



  ngOnInit(): void {
    this.getReportes()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && !changes['id'].firstChange) {
      this.getReportes();
    }
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
    this.router.navigate(['/reportes/lista']);
  }

  ampliarImagen(url: string): void {
    this.imgAmpliadaUrl = url;
    this.resetZoom();
  }

  cerrarImagen(): void {
    this.imgAmpliadaUrl = null;
    this.resetZoom();
  }

  zoomIn(): void  { this.zoomLevel = Math.min(this.zoomLevel + 0.25, 5); }
  zoomOut(): void { this.zoomLevel = Math.max(this.zoomLevel - 0.25, 1); if (this.zoomLevel === 1) { this.imgTranslateX = 0; this.imgTranslateY = 0; } }
  resetZoom(): void { this.zoomLevel = 1; this.imgTranslateX = 0; this.imgTranslateY = 0; }

  onLightboxWheel(e: WheelEvent): void {
    e.preventDefault();
    e.deltaY < 0 ? this.zoomIn() : this.zoomOut();
  }

  onDragStart(e: MouseEvent): void {
    if (this.zoomLevel <= 1) return;
    this.isDragging = true;
    this.dragStartX = e.clientX;
    this.dragStartY = e.clientY;
    this.dragOriginX = this.imgTranslateX;
    this.dragOriginY = this.imgTranslateY;
  }

  onDragMove(e: MouseEvent): void {
    if (!this.isDragging) return;
    this.imgTranslateX = this.dragOriginX + (e.clientX - this.dragStartX) / this.zoomLevel;
    this.imgTranslateY = this.dragOriginY + (e.clientY - this.dragStartY) / this.zoomLevel;
  }

  onDragEnd(): void { this.isDragging = false; }

  descargarImagen(url: string): void {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.download = 'imagen';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }


  getTipoClass(tipo: string): string {
    if (!tipo) return 'chip-default';
    if (tipo === 'Recorrido') return 'chip-recorrido';
    if (tipo === 'Baja') return 'chip-baja';
    if (tipo.includes('Preventivo')) return 'chip-preventivo';
    if (tipo.includes('Correctivo')) return 'chip-correctivo';
    return 'chip-default';
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

  // -------------------------------------------------------
  // Edición inline de observaciones
  // -------------------------------------------------------

  activarEdicion(obs: any): void {
    this.editModes[obs.idObservacion] = true;
    this.editData[obs.idObservacion] = {
      observacion: obs.observacion,
      diagnosticoTecnico: obs.diagnosticoTecnico,
      fallaDetectadaDuraSer: obs.fallaDetectadaDuraSer,
      comentariosEntregaEquip: obs.comentariosEntregaEquip,
    };
  }

  cancelarEdicion(idObservacion: number): void {
    this.editModes[idObservacion] = false;
    delete this.editData[idObservacion];
  }

  guardarObservacion(idObservacion: number): void {
    this.guardando[idObservacion] = true;
    this._reporte.editarObservacion(idObservacion, this.editData[idObservacion]).subscribe({
      next: () => {
        this.guardando[idObservacion] = false;
        this.editModes[idObservacion] = false;
        this.snackBar.open('Observación actualizada', 'Cerrar', { duration: 3000 });
        this.getReportes();
      },
      error: () => {
        this.guardando[idObservacion] = false;
        this.snackBar.open('Error al guardar. Intente de nuevo.', 'Cerrar', { duration: 4000 });
      },
    });
  }

  verificarCampo(idObservacion: number, campo: string): void {
    const texto: string = this.editData[idObservacion]?.[campo] || '';
    if (!texto.trim()) {
      this.snackBar.open('No hay texto para verificar', 'Cerrar', { duration: 2500 });
      return;
    }
    const key = `${idObservacion}-${campo}`;
    this.verificando[key] = true;
    this._reporte.textoCorreccionIA({ text: texto }).subscribe({
      next: (res: any) => {
        this.verificando[key] = false;
        const dialogRef = this.dialog.open(VerificarTextoDialogComponent, {
          data: { textoCorregido: res['response'] },
          width: '560px',
        });
        dialogRef.afterClosed().subscribe((resultado: string | null) => {
          if (resultado != null) {
            this.editData[idObservacion][campo] = resultado;
          }
        });
      },
      error: () => {
        this.verificando[key] = false;
        this.snackBar.open('Error al contactar el servicio de IA', 'Cerrar', { duration: 4000 });
      },
    });
  }

  // -------------------------------------------------------
  // Comentarios / Recomendaciones
  // -------------------------------------------------------

  abrirEditarComentario(comentario: any, idObservacion: number): void {
    const dialogRef = this.dialog.open(EditarComentarioDialogComponent, {
      data: { comentario: comentario.comentario, modo: 'editar' },
      width: '520px',
    });
    dialogRef.afterClosed().subscribe((texto: string | null) => {
      if (!texto) return;
      this._reporte.editarComentario(comentario.idObservacionComentario, {
        comentario: texto,
        observacionId: idObservacion,
      }).subscribe({
        next: () => {
          this.snackBar.open('Recomendación actualizada', 'Cerrar', { duration: 3000 });
          this.getReportes();
        },
        error: () => {
          this.snackBar.open('Error al actualizar. Intente de nuevo.', 'Cerrar', { duration: 4000 });
        },
      });
    });
  }

  abrirAgregarComentario(idObservacion: number): void {
    const dialogRef = this.dialog.open(EditarComentarioDialogComponent, {
      data: { comentario: '', modo: 'agregar' },
      width: '520px',
    });
    dialogRef.afterClosed().subscribe((texto: string | null) => {
      if (!texto) return;
      const userId = this.tokenService.getUserId();
      const fecha = new Date();
      const dateString = fecha.toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' });
      this._reporte.agregarComentario({
        comentario: texto,
        userId,
        observacionId: idObservacion,
        dateString,
      }).subscribe({
        next: () => {
          this.snackBar.open('Recomendación agregada', 'Cerrar', { duration: 3000 });
          this.getReportes();
        },
        error: () => {
          this.snackBar.open('Error al agregar. Intente de nuevo.', 'Cerrar', { duration: 4000 });
        },
      });
    });
  }
}
