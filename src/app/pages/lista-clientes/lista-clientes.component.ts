import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfiliadoModel } from '../../models/afiliado.model';
import { AfiliadoService } from '../../services/afiliado.service';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  afiliados: AfiliadoModel[] = [];
  calificacion: number;

  constructor(  private router: Router, private afiliadoService: AfiliadoService ) { }

  ngOnInit() {
    this.afiliadoService.getAfiliados()
    .subscribe(resp => this.afiliados = resp);
  }
}
