import { Component, OnInit } from '@angular/core';
import { ServicioModel } from '../../models/servicio.model';
import { NgForm } from '@angular/forms';
import { ServiciosService } from '../../services/servicios.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { text } from '@angular/core/src/render3';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-agregar-servicio',
  templateUrl: './agregar-servicio.component.html',
  styleUrls: ['./agregar-servicio.component.css']
})
export class AgregarServicioComponent implements OnInit {

  servicio = new ServicioModel();


  constructor( private servicioService: ServiciosService, private route: ActivatedRoute ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if( id != 'nuevo' ){
      this.servicioService.getServicio( id )
        .subscribe((resp: ServicioModel) => {
          this.servicio = resp;
          this.servicio.id = id;
        });
    }
  }

  guardar( form: NgForm ){

    if( form.invalid){
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion: Observable<any>;
    
    if( this.servicio.id ){
       peticion = this.servicioService.actualizarServicio( this.servicio );
    }else{
      peticion = this.servicioService.crearServicio( this.servicio );
    }

    peticion.subscribe( resp=> {
      Swal.fire({
        title: this.servicio.nombreServicio,
        text: 'Se actualizó correctamente',
        icon: 'success'
      })
    });
  }



}
