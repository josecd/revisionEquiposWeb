import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReporteService } from '../../services/reporte.service';

export interface EditarComentarioDialogData {
  comentario: string;
  modo: 'editar' | 'agregar';
}

@Component({
  selector: 'app-editar-comentario-dialog',
  templateUrl: './editar-comentario-dialog.component.html',
})
export class EditarComentarioDialogComponent {
  texto: string;
  verificando = false;

  constructor(
    public dialogRef: MatDialogRef<EditarComentarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditarComentarioDialogData,
    private _reporte: ReporteService,
    private snackBar: MatSnackBar,
  ) {
    this.texto = data.comentario || '';
  }

  verificarTexto(): void {
    if (!this.texto.trim()) {
      this.snackBar.open('No hay texto para verificar', 'Cerrar', { duration: 2500 });
      return;
    }
    this.verificando = true;
    this._reporte.textoCorreccionIA({ text: this.texto }).subscribe({
      next: (res: any) => {
        this.verificando = false;
        this.texto = res['response'];
      },
      error: () => {
        this.verificando = false;
        this.snackBar.open('Error al contactar el servicio de IA', 'Cerrar', { duration: 4000 });
      },
    });
  }

  guardar() {
    if (!this.texto.trim()) return;
    this.dialogRef.close(this.texto.trim());
  }

  cancelar() { this.dialogRef.close(null); }
}
