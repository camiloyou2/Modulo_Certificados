import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GenerarSolicitudesComponent } from './componentes/generar-solicitudes/generar-solicitudes.component';
import { AutentificarComponent } from './componentes/autentificar/autentificar.component';
import { VerSolicitudesComponent } from './componentes/ver-solicitudes/ver-solicitudes.component';


const routes: Routes = [

  {path : 'inicio' ,component: GenerarSolicitudesComponent},
  {path : 'login' ,component: AutentificarComponent},
  {path : 'view' ,component: VerSolicitudesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
