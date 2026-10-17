import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { CreateInventarioGrupoDto } from '../../../models/inventario-dinamico.model';

@Component({
  selector: 'app-form-grupo',
  templateUrl: './form-grupo.component.html'
})
export class FormGrupoComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormGrupoComponent>,
    private inventarioService: InventarioDinamicoService
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const dto: CreateInventarioGrupoDto = this.form.value;

    this.inventarioService.createGrupo(dto).subscribe({
      next: () => {
        this.dialogRef.close(true);
      },
      error: (err) => {
        alert(err.error?.message || 'Error al guardar');
      }
    });
  }
}
