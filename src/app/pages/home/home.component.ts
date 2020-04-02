import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
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
    private router: Router, private afiliadoService: AfiliadoService ) { }

ngOnInit() {

  this.afiliadoService.getAfiliado()
    .subscribe(resp => {this.afiliados = resp; console.log(resp);}
      );
}

verCandidato(){
  this.router.navigate(['informacionCandidato/1'])
}

}
