import { Component, OnInit } from '@angular/core';
import { AfiliadoModel } from '../../models/afiliado.model';
import { AfiliadoService } from '../../services/afiliado.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacion-candidato',
  templateUrl: './informacion-candidato.component.html',
  styleUrls: ['./informacion-candidato.component.css']
})
export class InformacionCandidatoComponent implements OnInit {

  afiliado = new AfiliadoModel();

  constructor(  private afiliadoService: AfiliadoService, 
                private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.afiliadoService.getAfiliado( id )
      .subscribe((resp: AfiliadoModel) => {
        this.afiliado = resp;
        this.afiliado.id = id;
      });

  }

  borrarCandidato( afiliados: AfiliadoModel ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ afiliados.Nombre } ${ afiliados.Apellido }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      
      if (resp.value){
        this.afiliadoService.borrarAfiliado( afiliados.id )
          .subscribe( resp => {
            Swal.fire({
              title: afiliados.Nombre,
              text: 'Se rechazó candidato correctamente',
              icon: 'success'
            });
          } );

          setTimeout(() => this.router.navigate(['home']), 1500);

      }
    });
  }

  actualizarCandidato( afiliados: AfiliadoModel ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea afiliar a ${ afiliados.Nombre } ${ afiliados.Apellido }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      
      if (resp.value){
        afiliados.estado = true;
        this.afiliadoService.cambiaEstado( afiliados )
          .subscribe( resp =>{
            Swal.fire({
              title: afiliados.Nombre,
              text: 'Se actualizó correctamente',
              icon: 'success'
            }) 
          })

          setTimeout(() => this.router.navigate(['home']), 1500);
          
          
          
      }
    });
  }
}
