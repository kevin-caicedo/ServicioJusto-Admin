import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AdministradorModel } from '../../models/administrador.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  admin: AdministradorModel;
  recordarme = false;

  constructor( private auth: AuthService, 
                private router: Router) { }

  ngOnInit() { 
    this.admin = new AdministradorModel();

  }

  onSubmit( form: NgForm ){

    if( form.invalid ){ return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    // Registra nuevo administrador
    this.auth.nuevoAdmin( this.admin )
    .subscribe( resp=> {

      console.log(resp);
      Swal.close();

      if( this.recordarme ){
        localStorage.setItem('email', this.admin.email);
      }

      this.router.navigateByUrl('/home');
    }, (err)=>{
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'Error al autenticar',
        text: err.error.error.message
      });
    })
  }


}
