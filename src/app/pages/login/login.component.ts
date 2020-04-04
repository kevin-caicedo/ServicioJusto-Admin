import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdministradorModel } from '../../models/administrador.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin: AdministradorModel = new AdministradorModel();
  
  recordarme = false;
  
  constructor(private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
      this.admin.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm ){

    if (form.invalid ) { return; }
   
    //Swal o sweet alert permite mostrar evento de mejor forma
    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    //Iniciar sesión, ademá navega a página principal cuando es correcto y si no pues muestra error
    this.auth.login(this.admin).subscribe( resp=>{
      
      console.log(resp);
      Swal.close();

      if( this.recordarme ){
        localStorage.setItem('email', this.admin.email);
      }else{
        localStorage.removeItem('email');
      }

      this.auth.cambiaMostrarMenu = true;

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
