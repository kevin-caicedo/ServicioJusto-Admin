import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  constructor(  private router: Router ) { }

  ngOnInit() {
  }

  verAfiliado(){
    this.router.navigate(['informacionAfiliado/1'])
  }

}
