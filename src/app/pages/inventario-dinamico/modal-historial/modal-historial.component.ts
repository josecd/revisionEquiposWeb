import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { MovimientoDinamico } from '../../../models/inventario-dinamico.model';

@Component({
  selector: 'app-modal-historial',
  templateUrl: './modal-historial.component.html'
})
export class ModalHistorialComponent implements OnInit {
  articulo: any;
  movimientos: MovimientoDinamico[] = [];
  displayedColumns = ['fecha', 'tipo', 'cantidad', 'stockResultante', 'motivo', 'metadata'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private inventarioService: InventarioDinamicoService
  ) {
    this.articulo = data.articulo;
  }

  ngOnInit() {
    this.inventarioService.getMovimientos(this.articulo.id).subscribe(data => {
      this.movimientos = data;
    });
  }

  get articuloDisplayName(): string {
    if (!this.articulo || !this.articulo.atributos) return 'Artículo Desconocido';
    const values = Object.keys(this.articulo.atributos)
      .filter(k => k !== 'id') // por si acaso
      .map(k => this.articulo.atributos[k])
      .filter(v => typeof v === 'string' || typeof v === 'number');
    return values.slice(0, 2).join(' - ') || 'Artículo sin detalles';
  }

  getTipoLabel(tipo: string): string {
    switch(tipo) {
      case 'IN': return 'Entrada (+)';
      case 'OUT': return 'Salida (-)';
      case 'ADJUST': return 'Ajuste de Stock';
      case 'MODIFICACION_ATRIBUTOS': return 'Edición de Atributos';
      default: return tipo;
    }
  }
}
