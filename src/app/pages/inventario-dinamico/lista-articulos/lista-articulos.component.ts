import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as xlsx from 'xlsx';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InventarioDinamicoService } from '../../../services/inventario-dinamico.service';
import { ArticuloDinamico } from '../../../models/inventario-dinamico.model';
import { FormArticuloComponent } from '../form-articulo/form-articulo.component';
import { ModalMovimientoComponent } from '../modal-movimiento/modal-movimiento.component';
import { ModalHistorialComponent } from '../modal-historial/modal-historial.component';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
})
export class ListaArticulosComponent implements OnInit {
  articulos: ArticuloDinamico[] = [];
  dataSource = new MatTableDataSource<ArticuloDinamico>([]);
  displayedColumns: string[] = ['acciones', 'stockActual'];
  dynamicKeys: string[] = [];
  grupoId: string = '';
  cargando: boolean = true;

  archivoSeleccionado: File | null = null;
  columnasExcel: string[] = [];
  columnaStockSeleccionada: string = '';

  constructor(
    private inventarioService: InventarioDinamicoService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.grupoId = this.route.snapshot.paramMap.get('grupoId') || '';
    if (this.grupoId) {
      this.cargarArticulos();
    }
  }

  cargarArticulos() {
    this.cargando = true;
    this.inventarioService.getArticulosByGrupo(this.grupoId).subscribe({
      next: (data) => {
        this.articulos = data;
        this.dataSource.data = this.articulos;
        
        // Configurar el buscador para que busque dentro del JSON de atributos
        this.dataSource.filterPredicate = (record: ArticuloDinamico, filter: string) => {
          const valoresStr = Object.values(record.atributos || {}).join(' ').toLowerCase();
          const stockStr = (record.stockActual || '').toString().toLowerCase();
          const fullStr = valoresStr + ' ' + stockStr;
          return fullStr.indexOf(filter) !== -1;
        };

        this.calcularColumnasDinamicas();
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  calcularColumnasDinamicas() {
    const keys = new Set<string>();
    this.articulos.forEach(art => {
      if (art.atributos) {
        Object.keys(art.atributos).forEach(k => keys.add(k));
      }
    });
    this.dynamicKeys = Array.from(keys);
    this.displayedColumns = ['acciones', 'stockActual', ...this.dynamicKeys];
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(sheet, { header: 1 });
        
        if (json.length > 0) {
          this.columnasExcel = json[0] as string[];
          this.archivoSeleccionado = file;
          this.columnaStockSeleccionada = this.columnasExcel.find(c => ['stock', 'cantidad', 'qty', 'quantity', 'existencia', 'existencias'].includes(String(c).toLowerCase().trim())) || this.columnasExcel[0];
        } else {
          alert('El archivo Excel parece estar vacío.');
        }
      };
      reader.readAsArrayBuffer(file);
    }
  }

  confirmarSubidaExcel() {
    if (this.archivoSeleccionado) {
      this.cargando = true;
      this.inventarioService.uploadExcel(this.grupoId, this.archivoSeleccionado, this.columnaStockSeleccionada).subscribe({
        next: () => {
          this.cargarArticulos();
          this.cancelarSubida();
        },
        error: (err) => {
          this.cargando = false;
          alert('Error al subir excel: ' + (err.error?.message || ''));
          this.cancelarSubida();
        }
      });
    }
  }

  cancelarSubida() {
    this.archivoSeleccionado = null;
    this.columnasExcel = [];
    this.columnaStockSeleccionada = '';
  }

  exportarExcel() {
    this.inventarioService.exportarExcel(this.grupoId).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Inventario_${this.grupoId}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  abrirCrear() {
    const dialogRef = this.dialog.open(FormArticuloComponent, { 
      width: '500px',
      data: { grupoId: this.grupoId, keys: this.dynamicKeys }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.cargarArticulos();
    });
  }

  abrirEditar(articulo: ArticuloDinamico) {
    const dialogRef = this.dialog.open(FormArticuloComponent, { 
      width: '500px',
      data: { grupoId: this.grupoId, articulo: articulo, keys: this.dynamicKeys }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.cargarArticulos();
    });
  }

  eliminarArticulo(id: string) {
    if (confirm('¿Estás seguro de eliminar este artículo y todos sus movimientos?')) {
      this.inventarioService.removeArticulo(id).subscribe(() => {
        this.cargarArticulos();
      });
    }
  }

  abrirMovimiento(articulo: ArticuloDinamico) {
    const dialogRef = this.dialog.open(ModalMovimientoComponent, { 
      width: '400px', 
      data: { articulo } 
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.cargarArticulos();
    });
  }

  abrirHistorial(articulo: ArticuloDinamico) {
    this.dialog.open(ModalHistorialComponent, { 
      width: '700px', 
      data: { articulo } 
    });
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
