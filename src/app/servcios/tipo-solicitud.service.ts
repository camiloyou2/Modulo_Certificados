import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosPersonales } from '../modelos/datos-personales';
import { HttpClient } from '@angular/common/http';
import { SolicitudVisualizar } from '../modelos/solicitud-visualizar';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {
  private datospersonalesurl = "http://localhost:8090/datospersonales";
  
  private url_solicutudes_generadas = "http://localhost:8090/solicitues_visualizar";
  constructor(private httpclient: HttpClient) { }

  traer_datos_personales():Observable<DatosPersonales[]>{
    return this.httpclient.get<DatosPersonales[]>(`${this.datospersonalesurl}`);
  }

  solicitudes_generadas():Observable<SolicitudVisualizar[]>{
    return this.httpclient.get<SolicitudVisualizar[]>(`${this.url_solicutudes_generadas}`);
  }

}
