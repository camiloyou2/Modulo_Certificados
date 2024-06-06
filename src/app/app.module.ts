import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VerSolicitudesComponent } from './componentes/ver-solicitudes/ver-solicitudes.component';
import { GenerarSolicitudesComponent } from './componentes/generar-solicitudes/generar-solicitudes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutentificarComponent } from './componentes/autentificar/autentificar.component';
import {DataTablesModule} from   'angular-datatables'
@NgModule({
  declarations: [
    AppComponent,
    VerSolicitudesComponent,
    GenerarSolicitudesComponent,
    AutentificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule,DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
