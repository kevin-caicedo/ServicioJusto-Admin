import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { InformacionCandidatoComponent } from './pages/informacion-candidato/informacion-candidato.component';
import { InformacionClienteComponent } from './pages/informacion-cliente/informacion-cliente.component';
import { ListaServiciosComponent } from './pages/lista-servicios/lista-servicios.component';
import { PqrsComponent } from './pages/pqrs/pqrs.component';
import { ActualizaServicioComponent } from './pages/actualiza-servicio/actualiza-servicio.component';
import { AgregarServicioComponent } from './pages/agregar-servicio/agregar-servicio.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    ListaClientesComponent,
    InformacionCandidatoComponent,
    InformacionClienteComponent,
    ListaServiciosComponent,
    PqrsComponent,
    ActualizaServicioComponent,
    AgregarServicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
