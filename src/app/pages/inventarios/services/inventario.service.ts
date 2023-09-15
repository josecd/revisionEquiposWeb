import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

   constructor(private _httpClient: HttpClient) { }


  getInventario() {
    return this._httpClient.get(environment.API_URL + '/inventario');
  }
  getInventarioFiltro(data:any) {
    return this._httpClient.post(environment.API_URL + '/inventario/filter',data);
  }
  getInventarioID(id: any) {
    return this._httpClient.get(environment.API_URL + `/inventario/${id}`)
  }
  crearInventario(data: any) {
    return this._httpClient.post(environment.API_URL + `/inventario`, data)
  }
  crearParte(data: any) {
    return this._httpClient.post(environment.API_URL + `/parte`, data)
  }
  eliminarInventario(id: number) {
    return this._httpClient.delete(environment.API_URL + '/inventario/' + id);
  }

  //Imagen 
  agregarImg(data:any){
    return this._httpClient.post(environment.API_URL + `/parte/imgParte`,data)
  }
}
