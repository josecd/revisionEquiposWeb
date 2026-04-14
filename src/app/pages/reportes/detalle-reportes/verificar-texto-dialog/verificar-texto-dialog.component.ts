import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface VerificarTextoDialogData {
  textoCorregido: string;
}

@Component({
  selector: 'app-verificar-texto-dialog',
  templateUrl: './verificar-texto-dialog.component.html',
})
export class VerificarTextoDialogComponent {
  textoPropuesto: string;

  constructor(
    public dialogRef: MatDialogRef<VerificarTextoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VerificarTextoDialogData,
  ) {
    this.textoPropuesto = data.textoCorregido;
  }

  aceptar() { this.dialogRef.close(this.textoPropuesto); }
  cancelar() { this.dialogRef.close(null); }
}
