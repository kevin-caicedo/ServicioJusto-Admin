import { Component, OnInit } from '@angular/core';
import { AfiliadoService } from '../../services/afiliado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AfiliadoModel } from '../../models/afiliado.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-informacion-cliente',
  templateUrl: './informacion-cliente.component.html',
  styleUrls: ['./informacion-cliente.component.css']
})
export class InformacionClienteComponent implements OnInit {

  afiliado = new AfiliadoModel();


  constructor( private afiliadoService: AfiliadoService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.afiliadoService.getAfiliado( id )
      .subscribe((resp: AfiliadoModel) => {
        this.afiliado = resp;
        this.afiliado.id = id;
      });
  }

  borrarAfiliado( afiliados: AfiliadoModel ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${ afiliados.Nombre } ${ afiliados.Apellido }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      
      if (resp.value){
        this.afiliadoService.borrarAfiliado( afiliados.id )
          .subscribe(resp => {
            Swal.fire({
              title: afiliados.Nombre,
              text: 'Se elimnió afiliado correctamente',
              icon: 'success'
            });
          });


        setTimeout(() => this.router.navigate(['listaAfiliado']), 1500);
      }
    });

  }


}
