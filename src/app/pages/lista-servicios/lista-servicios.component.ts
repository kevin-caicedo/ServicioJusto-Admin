import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { ServicioModel } from '../../models/servicio.model';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {

  servicios: ServicioModel[] = [];

  constructor(  private servicioservice: ServiciosService, private router: Router ) { }

  ngOnInit() {
    this.servicioservice.getServicios()
      .subscribe(resp => this.servicios = resp);
  }


  actualizaServicio(){
    this.router.navigate(['actualizaServicio/1'])
  }

  agregarServicio(){
    this.router.navigate(['agregarServicio'])
  }

}
