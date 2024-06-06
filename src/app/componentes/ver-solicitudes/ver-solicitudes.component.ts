import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SolicitudVisualizar } from 'src/app/modelos/solicitud-visualizar';
import { TipoSolicitudService } from 'src/app/servcios/tipo-solicitud.service';

@Component({
  selector: 'app-ver-solicitudes',
  templateUrl: './ver-solicitudes.component.html',
  styleUrls: ['./ver-solicitudes.component.scss']
})
export class VerSolicitudesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  
  solicitudVisualizar: SolicitudVisualizar[];

 
  constructor( private tipoSolicitudService:TipoSolicitudService,private route:Router, private http: HttpClient){
  }
 
  
  ngOnInit(): void {
    
    this.tipoSolicitudService.solicitudes_generadas().subscribe(dato => {
      this.solicitudVisualizar = dato;
      this.dtTrigger.next(null);
     
    })
    

    
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/2.0.2/i18n/es-ES.json',
    }  ,info: false,
    ordering: false,
    paging: false
   
   
    
    
    };
   

    
   

   
  }

   
}
