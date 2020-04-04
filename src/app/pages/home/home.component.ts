import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AfiliadoService } from '../../services/afiliado.service';
import { AfiliadoModel } from '../../models/afiliado.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  afiliados: AfiliadoModel[] = [];

  constructor( private auth: AuthService,
    private afiliadoService: AfiliadoService ) { }

ngOnInit() {

  this.afiliadoService.getAfiliados()
    .subscribe(resp => this.afiliados = resp);
}

}
