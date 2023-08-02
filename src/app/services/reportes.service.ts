import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  API_URL: 'http://localhost:3000'
  constructor(private _httpClient: HttpClient) { }

  getReportes() {
    return this._httpClient.get('http://localhost:3000' + '/reportes');
  }

  getReporteID(id:number){
    return this._httpClient.get('http://localhost:3000'+`/reportes/${id}`);
  }

  verPDF(id:any){
    const url = 'http://localhost:3000' +'/reportes/pdf/view/' + id 
    window.open(url, "_blank");
  }
  descargarPDF(id:any){
    const url = `http://localhost:3000/reportes/${id}/pdfReporte`
    window.open(url, "_blank");
  }

  hotelesLista(){
    return this._httpClient.get('http://localhost:3000'+`/hoteles`);
  }

  reportesFiltro(data:any){
    return this._httpClient.post('http://localhost:3000'+`/reportes/filter`,data);
  }
}
