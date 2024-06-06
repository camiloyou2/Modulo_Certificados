import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatosVerificar } from './modelos/datos-verificar';
import { CodigoCapcha } from './modelos/codigo-capcha';
import { DatosPersonales } from './modelos/datos-personales';
import { Router } from '@angular/router';
import { CodigoCapchaService } from './servcios/codigo-capcha.service';
import { TipoSolicitudService } from './servcios/tipo-solicitud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   implements OnInit {
  title = 'certificado_laboral'; 


   
  
    datosPersonales:DatosPersonales[]; // trae los datos de la persona con su imagen incluida
  
  // formulario del capcha
  mensaje_error = "";
  codigoCapcha: CodigoCapcha[];
   datosverificar: DatosVerificar[] = [];
     reurnvalor:String ="";
  nuevo = [];
   lista: String[] = [];
  public verificar:DatosVerificar = new DatosVerificar();
   
    formulariologin = new FormGroup ({
      cedula: new FormControl('', Validators.required),
      fecha_de_expedicion: new FormControl('', Validators.required),
      Codigo: new FormControl('', Validators.required),
      tipo_de_documento  : new FormControl('', Validators.required),
    });
  
    imgcapcha = "";
    constructor( private codigoCapchaService:CodigoCapchaService,private route:Router,private tipoSolicitudService:TipoSolicitudService){
    }
  
    verificar_login(){
      this.codigoCapchaService.codigoCapcgaEntrante().subscribe(dato => {
        this.codigoCapcha = dato;
      });
  }
  cargarr(comparar:String){
    alert("cargase")
    let data = this.formulariologin.value;
    this.codigoCapcha[0].codigo
  
    if(data.Codigo  === this.codigoCapcha[0].codigo){
      alert("bien")
   
     let valor = "true";
     if(comparar === valor){
      alert("redirec")
    this.tipoSolicitudService.traer_datos_personales().subscribe(dato => {
      this.datosPersonales = dato; 
    });
    alert("redirec2")
     
      alert("redirec")
      this.route.navigate(['inicio/Solicitudes/'])
     }
     else{
      this.mensaje_error="datos_erroneos";
      this.verificar_login();
     }
    
    }
    else{
      this.mensaje_error="capcha";
      this.verificar_login();
      
    
  
  
    }
  }
  
  
  
  
  verificar_login_ultimo(){
    alert("hola");
    let data = this.formulariologin.value;
    var valor:String ;
    this.lista = [];
    this.lista.push(String(data.tipo_de_documento));
    this.lista.push(String(data.cedula));
    this.lista.push(String(data.fecha_de_expedicion));
    this.codigoCapchaService.sendDataToSpring(this.lista).subscribe(response => {
        valor= Object.values(response)[0].existe_REGISTRO
  
        this.cargarr(valor);
        } );
  }
  
  
  ngOnInit(): void {
  
    this.verificar_login();
  }
  
}
