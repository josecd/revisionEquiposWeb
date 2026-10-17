import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { 
  InventarioGrupo,
  CreateInventarioGrupoDto,
  ArticuloDinamico, 
  CreateArticuloDinamicoDto, 
  MovimientoDinamico, 
  CreateMovimientoDinamicoDto 
} from '../models/inventario-dinamico.model';

@Injectable({
  providedIn: 'root'
})
export class InventarioDinamicoService {
  private apiUrl = `${environment.API_URL}/inventario-dinamico`;

  constructor(private http: HttpClient) {}

  getGrupos(): Observable<InventarioGrupo[]> {
    return this.http.get<InventarioGrupo[]>(`${this.apiUrl}/grupos`);
  }

  removeGrupo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/grupos/${id}`);
  }

  createGrupo(grupo: CreateInventarioGrupoDto): Observable<InventarioGrupo> {
    return this.http.post<InventarioGrupo>(`${this.apiUrl}/grupos`, grupo);
  }

  getArticulosByGrupo(grupoId: string): Observable<ArticuloDinamico[]> {
    return this.http.get<ArticuloDinamico[]>(`${this.apiUrl}/grupos/${grupoId}/articulos`);
  }

  uploadExcel(grupoId: string, file: File, stockColumn?: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    if (stockColumn) {
      formData.append('stockColumn', stockColumn);
    }
    return this.http.post(`${this.apiUrl}/grupos/${grupoId}/excel`, formData);
  }

  exportarExcel(grupoId: string) {
    return this.http.get(`${this.apiUrl}/grupos/${grupoId}/excel`, { responseType: 'blob' });
  }

  getArticulo(id: string): Observable<ArticuloDinamico> {
    return this.http.get<ArticuloDinamico>(`${this.apiUrl}/articulos/${id}`);
  }

  createArticulo(articulo: CreateArticuloDinamicoDto): Observable<ArticuloDinamico> {
    return this.http.post<ArticuloDinamico>(`${this.apiUrl}/articulos`, articulo);
  }

  updateArticulo(id: string, atributos: Record<string, any>): Observable<ArticuloDinamico> {
    return this.http.put<ArticuloDinamico>(`${this.apiUrl}/articulos/${id}`, { atributos });
  }

  removeArticulo(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/articulos/${id}`);
  }

  getMovimientos(articuloId: string): Observable<MovimientoDinamico[]> {
    return this.http.get<MovimientoDinamico[]>(`${this.apiUrl}/articulos/${articuloId}/movimientos`);
  }

  getHoteles(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.API_URL}/hoteles`);
  }

  registerMovimiento(articuloId: string, movimiento: CreateMovimientoDinamicoDto): Observable<MovimientoDinamico> {
    return this.http.post<MovimientoDinamico>(`${this.apiUrl}/articulos/${articuloId}/movimientos`, movimiento);
  }
}
