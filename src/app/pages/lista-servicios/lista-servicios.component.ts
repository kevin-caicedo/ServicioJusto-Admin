import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosService } from '../../services/servicios.service';
import { ServicioModel } from '../../models/servicio.model';
import Swal from 'sweetalert2';

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

  borrarServicio( servicio: ServicioModel, i: number ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ servicio.nombreServicio }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      
      if (resp.value){
        this.servicios.splice(i, 1);
        this.servicioservice.borrarServicio( servicio.id ).subscribe();
      }
    });
  }

}
