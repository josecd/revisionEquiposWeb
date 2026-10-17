import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { InventarioGrupo } from '../../../models/inventario-dinamico.model';
import { FormGrupoComponent } from '../form-grupo/form-grupo.component';

@Component({
  selector: 'app-lista-grupos',
  templateUrl: './lista-grupos.component.html',
})
export class ListaGruposComponent implements OnInit {
  grupos: InventarioGrupo[] = [];
  cargando: boolean = true;

  constructor(
    private inventarioService: InventarioDinamicoService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.cargando = true;
    this.inventarioService.getGrupos().subscribe({
      next: (data) => {
        this.grupos = data;
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  abrirCrear() {
    const dialogRef = this.dialog.open(FormGrupoComponent, { width: '400px' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.cargarGrupos();
    });
  }

  irAInventario(id: string) {
    this.router.navigate(['/inventario-dinamico', id, 'articulos']);
  }

  eliminarGrupo(id: string) {
    if (confirm('¿Estás seguro de eliminar este grupo? Se borrarán todos los artículos y movimientos dentro de él de manera permanente.')) {
      this.inventarioService.removeGrupo(id).subscribe({
        next: () => this.cargarGrupos(),
        error: (err) => alert('Error al eliminar: ' + (err.error?.message || err.message))
      });
    }
  }
}
