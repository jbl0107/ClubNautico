import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { HomeComponent } from './home/home.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ListarSocioComponent } from './listar-socio/listar-socio.component';
import { ListarPatronComponent } from './listar-patron/listar-patron.component';
import { ListarBarcoComponent } from './listar-barco/listar-barco.component';
import { ListarSalidaComponent } from './listar-salida/listar-salida.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { DetallesPersonaComponent } from './detalles-persona/detalles-persona.component';
import { RegistrarSocioComponent } from './registrar-socio/registrar-socio.component';
import { DetallesSocioComponent } from './detalles-socio/detalles-socio.component';
import { ActualizarSocioComponent } from './actualizar-socio/actualizar-socio.component';
import { RegistrarPatronComponent } from './registrar-patron/registrar-patron.component';
import { ActualizarPatronComponent } from './actualizar-patron/actualizar-patron.component';
import { DetallesPatronComponent } from './detalles-patron/detalles-patron.component';
import { RegistrarBarcoComponent } from './registrar-barco/registrar-barco.component';
import { DetallesBarcoComponent } from './detalles-barco/detalles-barco.component';
import { ActualizarBarcoComponent } from './actualizar-barco/actualizar-barco.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { DetallesSalidaComponent } from './detalles-salida/detalles-salida.component';
import { ActualizarSalidaComponent } from './actualizar-salida/actualizar-salida.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuard } from './guards/login.guard';
import { BarcosSocioComponent } from './barcos-socio/barcos-socio.component';
import { BarcosPatronComponent } from './barcos-patron/barcos-patron.component';
import { SalidasBarcoComponent } from './salidas-barco/salidas-barco.component';

const routes: Routes = [

   
  {path:'', component:HomeComponent},

  //con canActivate establecemos los guards. los ejecuta en orden, uno detras d otro. Con q uno dé false, ya no permitirá el acceso
  {path: 'listado-personas', component:ListarPersonaComponent, canActivate: [LoginGuard]},
  {path: 'registrar-persona', component:RegistrarPersonaComponent, canActivate: [LoginGuard]},
  {path: 'detalles-persona/:id', component:DetallesPersonaComponent, canActivate: [LoginGuard]},
  {path: 'actualizar-persona/:id', component:ActualizarPersonaComponent, canActivate: [LoginGuard]},

  {path: 'listado-socios', component:ListarSocioComponent, canActivate: [LoginGuard]},
  {path: 'registrar-socio', component:RegistrarSocioComponent, canActivate: [LoginGuard]},
  {path: 'detalles-socio/:id', component:DetallesSocioComponent, canActivate: [LoginGuard]},
  {path: 'actualizar-socio/:id', component:ActualizarSocioComponent, canActivate: [LoginGuard]},
  
  {path: 'listado-patrones', component:ListarPatronComponent, canActivate: [LoginGuard]},
  {path: 'registrar-patron', component:RegistrarPatronComponent, canActivate: [LoginGuard]},
  {path: 'detalles-patron/:id', component:DetallesPatronComponent, canActivate: [LoginGuard]},
  {path: 'actualizar-patron/:id', component:ActualizarPatronComponent, canActivate: [LoginGuard]},

  {path: 'listado-barcos', component:ListarBarcoComponent, canActivate: [LoginGuard]},
  {path: 'registrar-barco', component:RegistrarBarcoComponent, canActivate: [LoginGuard]},
  {path: 'detalles-barco/:id', component:DetallesBarcoComponent, canActivate: [LoginGuard]},
  {path: 'actualizar-barco/:id', component:ActualizarBarcoComponent, canActivate: [LoginGuard]},
  {path: 'listado-barcos-socio/:id', component:BarcosSocioComponent, canActivate: [LoginGuard]},
  {path: 'listado-barcos-patron/:id', component:BarcosPatronComponent, canActivate: [LoginGuard]},

  {path: 'listado-salidas', component:ListarSalidaComponent, canActivate: [LoginGuard]},
  {path: 'registrar-salida', component:RegistrarSalidaComponent, canActivate: [LoginGuard]},
  {path: 'detalles-salida/:id', component:DetallesSalidaComponent, canActivate: [LoginGuard]},
  {path: 'actualizar-salida/:id', component:ActualizarSalidaComponent, canActivate: [LoginGuard]},
  {path: 'listado-salidas-barco/:id', component:SalidasBarcoComponent, canActivate: [LoginGuard]},

  {path: 'login', component:LoginComponent},
  {path: 'registro', component:RegistroComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
