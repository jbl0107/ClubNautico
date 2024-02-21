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

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'listado-personas', component:ListarPersonaComponent},
  {path: 'registrar-persona', component:RegistrarPersonaComponent},
  {path: 'detalles-persona/:id', component:DetallesPersonaComponent},
  {path: 'actualizar-persona/:id', component:ActualizarPersonaComponent},

  {path: 'listado-socios', component:ListarSocioComponent},
  {path: 'registrar-socio', component:RegistrarSocioComponent},
  {path: 'detalles-socio/:id', component:DetallesSocioComponent},
  {path: 'actualizar-socio/:id', component:ActualizarSocioComponent},
  
  {path: 'listado-patrones', component:ListarPatronComponent},
  {path: 'registrar-patron', component:RegistrarPatronComponent},
  {path: 'detalles-patron/:id', component:DetallesPatronComponent},
  {path: 'actualizar-patron/:id', component:ActualizarPatronComponent},

  {path: 'listado-barcos', component:ListarBarcoComponent},
  {path: 'registrar-barco', component:RegistrarBarcoComponent},
  {path: 'detalles-barco/:id', component:DetallesBarcoComponent},
  {path: 'actualizar-barco/:id', component:ActualizarBarcoComponent},

  {path: 'listado-salidas', component:ListarSalidaComponent},
  {path: 'registrar-salida', component:RegistrarSalidaComponent},
  {path: 'detalles-salida/:id', component:DetallesSalidaComponent},
  {path: 'actualizar-salida/:id', component:ActualizarSalidaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
