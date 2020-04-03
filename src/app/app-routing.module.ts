import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

import { MenuComponent } from './pages/menu/menu.component';
import { ListaClientesComponent } from './pages/lista-clientes/lista-clientes.component';
import { InformacionCandidatoComponent } from './pages/informacion-candidato/informacion-candidato.component';
import { InformacionClienteComponent } from './pages/informacion-cliente/informacion-cliente.component';
import { ListaServiciosComponent } from './pages/lista-servicios/lista-servicios.component';
import { PqrsComponent } from './pages/pqrs/pqrs.component';
import { AgregarServicioComponent } from './pages/agregar-servicio/agregar-servicio.component';

const routes: Routes = [
  { path: 'menu'   , component: MenuComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home'    , component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'listaAfiliado'   , component: ListaClientesComponent },
  { path: 'informacionAfiliado/:id'   , component: InformacionClienteComponent },
  { path: 'informacionCandidato/:id'   , component: InformacionCandidatoComponent },
  { path: 'listaServicios'   , component: ListaServiciosComponent },
  { path: 'agregarServicio/:id'   , component: AgregarServicioComponent },
  { path: 'pqrs'   , component: PqrsComponent },
  { path: '**', redirectTo: 'registro' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
