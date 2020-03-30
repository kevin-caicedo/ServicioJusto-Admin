import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mobileQuery: MediaQueryList;

  navegacion = [
    { name: "Lista de candidatos", route: "/home" },
    { name: "Lista de afiliados", route: "/listaAfiliado" },
    { name: "Lista de Servicios", route: "/listaServicios" },
    { name: "Ver PQRS", route: "/pqrs" }
  ]

  fillerContent = Array.from({ length: 50 }, () => '');

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher, private router: Router, private auth: AuthService
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  cerrarSesion(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }
}
