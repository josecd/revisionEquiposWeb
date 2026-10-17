import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { CreateArticuloDinamicoDto } from '../../../models/inventario-dinamico.model';

@Component({
  selector: 'app-form-articulo',
  templateUrl: './form-articulo.component.html'
})
export class FormArticuloComponent {
  form: FormGroup;
  guardando: boolean = false;
  grupoId: string;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FormArticuloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventarioService: InventarioDinamicoService
  ) {
    this.grupoId = data.grupoId;
    this.form = this.fb.group({
      atributos: this.fb.array([])
    });

    const knownKeys: string[] = data.keys || [];

    if (data.articulo && data.articulo.atributos) {
      const articuloKeys = Object.keys(data.articulo.atributos);
      // Combinar las llaves que tiene el artículo con las conocidas del grupo
      const allKeys = Array.from(new Set([...knownKeys, ...articuloKeys]));
      
      if (allKeys.length > 0) {
        allKeys.forEach(k => {
          const val = data.articulo.atributos[k];
          this.atributos.push(this.fb.group({
            llave: [k, Validators.required],
            valor: [val !== undefined ? val : '']
          }));
        });
      } else {
        this.addAtributo();
      }
    } else {
      if (knownKeys.length > 0) {
        knownKeys.forEach(k => {
          this.atributos.push(this.fb.group({
            llave: [k, Validators.required],
            valor: ['']
          }));
        });
      } else {
        this.addAtributo();
      }
    }
  }

  get atributos(): FormArray {
    return this.form.get('atributos') as FormArray;
  }

  addAtributo() {
    const atributoForm = this.fb.group({
      llave: ['', Validators.required],
      valor: ['']
    });
    this.atributos.push(atributoForm);
  }

  removeAtributo(index: number) {
    this.atributos.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) return;

    // Transformar array de form a un objeto de atributos JSON
    const attrsArray = this.form.value.atributos;
    const atributosJson: any = {};
    attrsArray.forEach((attr: any) => {
      if (attr.llave && attr.valor) {
        atributosJson[attr.llave] = attr.valor;
      }
    });

    this.guardando = true;
    if (this.data.articulo) {
      this.inventarioService.updateArticulo(this.data.articulo.id, atributosJson).subscribe({
        next: () => {
          this.guardando = false;
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.guardando = false;
          alert(err.error?.message || 'Error al actualizar');
        }
      });
    } else {
      const dto: CreateArticuloDinamicoDto = {
        inventarioGrupoId: this.grupoId,
        atributos: atributosJson
      };

      this.inventarioService.createArticulo(dto).subscribe({
        next: () => {
          this.guardando = false;
          this.dialogRef.close(true);
        },
        error: (err) => {
          this.guardando = false;
          alert(err.error?.message || 'Error al guardar');
        }
      });
    }
  }
}
