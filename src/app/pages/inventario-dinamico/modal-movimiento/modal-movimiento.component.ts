import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { CreateMovimientoDinamicoDto, TipoMovimientoDinamico } from '../../../models/inventario-dinamico.model';

@Component({
  selector: 'app-modal-movimiento',
  templateUrl: './modal-movimiento.component.html'
})
export class ModalMovimientoComponent implements OnInit {
  form: FormGroup;
  guardando: boolean = false;
  articulo: any;
  tipos = [
    { value: TipoMovimientoDinamico.IN, label: 'Entrada (+)' },
    { value: TipoMovimientoDinamico.OUT, label: 'Salida (-)' },
    { value: TipoMovimientoDinamico.ADJUST, label: 'Ajuste de Stock' }
  ];
  hoteles: any[] = [];
  
  // Opciones comunes para metadatos de movimientos
  commonKeys = [
    'Destino',
    'Origen',
    'Responsable',
    'Técnico',
    'Ticket / Folio',
    'Área',
    'Hotel',
    'Comentarios'
  ];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalMovimientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventarioService: InventarioDinamicoService
  ) {
    this.articulo = data.articulo;
    this.form = this.fb.group({
      tipo: [TipoMovimientoDinamico.IN, Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
      motivo: [''],
      metadata: this.fb.array([])
    });
  }

  ngOnInit() {
    this.inventarioService.getHoteles().subscribe({
      next: (data) => this.hoteles = data,
      error: (err) => console.error('Error cargando hoteles:', err)
    });
  }

  get metadata(): FormArray {
    return this.form.get('metadata') as FormArray;
  }

  get articuloDisplayName(): string {
    if (!this.articulo || !this.articulo.atributos) return 'Artículo Desconocido';
    const values = Object.values(this.articulo.atributos).filter(v => typeof v === 'string' || typeof v === 'number');
    return values.slice(0, 2).join(' - ') || 'Artículo sin detalles';
  }

  addMetadata() {
    this.metadata.push(this.fb.group({
      llave: ['', Validators.required],
      valor: ['', Validators.required]
    }));
  }

  removeMetadata(index: number) {
    this.metadata.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) return;

    const attrsArray = this.form.value.metadata;
    const metadataJson: any = {};
    if (attrsArray && attrsArray.length > 0) {
      attrsArray.forEach((attr: any) => {
        if (attr.llave && attr.valor) {
          metadataJson[attr.llave] = attr.valor;
        }
      });
    }

    const dto: CreateMovimientoDinamicoDto = {
      tipo: this.form.value.tipo,
      cantidad: this.form.value.cantidad,
      motivo: this.form.value.motivo,
      metadata: Object.keys(metadataJson).length > 0 ? metadataJson : undefined
    };

    this.guardando = true;
    this.inventarioService.registerMovimiento(this.articulo.id, dto).subscribe({
      next: () => {
        this.guardando = false;
        this.dialogRef.close(true);
      },
      error: (err) => {
        this.guardando = false;
        alert(err.error?.message || 'Error al guardar movimiento');
      }
    });
  }
}
