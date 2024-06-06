import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodigoCapcha } from '../modelos/codigo-capcha';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodigoCapchaService {
  private base_url = "http://localhost:8090/c";
  private base_url_posts = "http://localhost:8090/loog";
  constructor(private httpclient: HttpClient) { }

  codigoCapcgaEntrante():Observable<CodigoCapcha[]>{
  
    return this.httpclient.get<CodigoCapcha[]>(`${this.base_url}`);
  }


   sendDataToSpring(datosVerificar: any): Observable<object> {
  
    return this.httpclient.post(`${this.base_url_posts}`, datosVerificar);
    
  }
}
