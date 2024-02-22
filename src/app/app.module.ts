import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PersonaService } from './service/persona/persona.service';
import { FormsModule } from '@angular/forms';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { HomeComponent } from './home/home.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarPatronComponent } from './listar-patron/listar-patron.component';
import { ListarSocioComponent } from './listar-socio/listar-socio.component';
import { ListarBarcoComponent } from './listar-barco/listar-barco.component';
import { ListarSalidaComponent } from './listar-salida/listar-salida.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { DetallesPersonaComponent } from './detalles-persona/detalles-persona.component';
import { SocioService } from './service/socio/socio.service';
import { RegistrarSocioComponent } from './registrar-socio/registrar-socio.component';
import { ActualizarSocioComponent } from './actualizar-socio/actualizar-socio.component';
import { DetallesSocioComponent } from './detalles-socio/detalles-socio.component';
import { RegistrarPatronComponent } from './registrar-patron/registrar-patron.component';
import { DetallesPatronComponent } from './detalles-patron/detalles-patron.component';
import { ActualizarPatronComponent } from './actualizar-patron/actualizar-patron.component';
import { RegistrarBarcoComponent } from './registrar-barco/registrar-barco.component';
import { DetallesBarcoComponent } from './detalles-barco/detalles-barco.component';
import { ActualizarBarcoComponent } from './actualizar-barco/actualizar-barco.component';
import { BarcoService } from './service/barco/barco.service';
import { PatronService } from './service/patron/patron.service';
import { SalidaService } from './service/salida/salida.service';
import { DetallesSalidaComponent } from './detalles-salida/detalles-salida.component';
import { ActualizarSalidaComponent } from './actualizar-salida/actualizar-salida.component';
import { RegistrarSalidaComponent } from './registrar-salida/registrar-salida.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './service/auth/auth.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegistroComponent } from './registro/registro.component';
import { LoginGuard } from './guards/login.guard';
import { BarcosSocioComponent } from './barcos-socio/barcos-socio.component';
import { BarcosPatronComponent } from './barcos-patron/barcos-patron.component';
import { SalidasBarcoComponent } from './salidas-barco/salidas-barco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarPersonaComponent,
    RegistrarPersonaComponent,
    ListarPatronComponent,
    ListarSocioComponent,
    ListarBarcoComponent,
    ListarSalidaComponent,
    ActualizarPersonaComponent,
    DetallesPersonaComponent,
    RegistrarSocioComponent,
    ActualizarSocioComponent,
    DetallesSocioComponent,
    RegistrarPatronComponent,
    DetallesPatronComponent,
    ActualizarPatronComponent,
    RegistrarBarcoComponent,
    DetallesBarcoComponent,
    ActualizarBarcoComponent,
    DetallesSalidaComponent,
    ActualizarSalidaComponent,
    RegistrarSalidaComponent,
    LoginComponent,
    RegistroComponent,
    BarcosSocioComponent,
    BarcosPatronComponent,
    SalidasBarcoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //necesario para poder ejecutar metodos http desde los servicios q creemos
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [PersonaService, provideToastr(), SocioService, BarcoService, PatronService, SalidaService, AuthService, 
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, //nuestra clase interceptor
      multi: true
    }],

  bootstrap: [AppComponent]
})
export class AppModule { }
