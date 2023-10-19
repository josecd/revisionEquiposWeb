import { Component, Input, inject } from '@angular/core';
import { InventarioService } from '../services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-inventario',
  templateUrl: './detalle-inventario.component.html',
  styleUrls: ['./detalle-inventario.component.scss']
})
export class DetalleInventarioComponent {
  @Input() id: number;
  private sub: any;
  InformacionInventario: any;
  private readonly _inventario= inject(InventarioService);
  private readonly router= inject(Router);

 
  ngOnInit(): void {
    this.getInventarioID()
  }

  getInventarioID() {
    this._inventario.getInventarioID(this.id).subscribe({
      next: (value: any) => {
        this.InformacionInventario = value
      },
      error: (err) => {

      },
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  back(): void {
    this.router.navigate(['/reportesAlta/lista']);
  }
}
