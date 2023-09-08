import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  API_URL: 'http://localhost:3000'
  constructor(private _httpClient: HttpClient) { }

  getReportes() {
    return this._httpClient.get(environment.API_URL + '/reportes');
  }

  getReporteID(id:number){
    return this._httpClient.get(environment.API_URL+`/reportes/${id}/alto`);
  }

  verPDF(id:any){
    const url = environment.API_URL +'/reportes/pdf/view/' + id 
    window.open(url, "_blank");
  }
  descargarPDF(id:any){
    const url = environment.API_URL +`/reportes/${id}/pdfReporte`
    window.open(url, "_blank");
  }

  hotelesLista(){
    return this._httpClient.get(environment.API_URL+`/hoteles`);
  }

  reportesFiltro(data:any){
    return this._httpClient.post(environment.API_URL+`/reportes/filter2`,data);
  }

  reportesFiltroexs(data:any){
    return this._httpClient.post(environment.API_URL+`/reportes/filterExcel`,data);
  }
}
