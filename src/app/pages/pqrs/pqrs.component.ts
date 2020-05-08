import { Component, OnInit } from '@angular/core';
import { PqrsModel } from '../../models/pqrs.model';
import { PqrsService } from '../../services/pqrs.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.component.html',
  styleUrls: ['./pqrs.component.css']
})
export class PqrsComponent implements OnInit {

  pqrss: PqrsModel[] = [];


  constructor( private pqrsService: PqrsService ) { }

  ngOnInit() {
    this.pqrsService.getPqrs()
      .subscribe(resp => {
        this.pqrss = resp

        

      });
  }

  borrarPqrs( pqrs: PqrsModel, i: number ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar esta ${ pqrs.tipo }`,
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      
      if (resp.value){
        this.pqrss.splice(i, 1);
        this.pqrsService.borrarPqrs( pqrs.id ).subscribe();
      }
    });
  }

}
