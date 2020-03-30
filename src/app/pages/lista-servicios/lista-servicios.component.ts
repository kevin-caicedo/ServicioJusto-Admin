import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-servicios',
  templateUrl: './lista-servicios.component.html',
  styleUrls: ['./lista-servicios.component.css']
})
export class ListaServiciosComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  actualizaServicio(){
    this.router.navigate(['actualizaServicio/1'])
  }

  agregarServicio(){
    this.router.navigate(['agregarServicio'])
  }

}
