import { Component } from '@angular/core';
import { InventarioService } from '../services/inventario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-inventario',
  templateUrl: './detalle-inventario.component.html',
  styleUrls: ['./detalle-inventario.component.scss']
})
export class DetalleInventarioComponent {
  id: number;
  private sub: any;
  InformacionInventario: any;

  constructor(
    private _inventario: InventarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

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
    this.router.navigate(['/extras/sample-mypage']);
  }
}
