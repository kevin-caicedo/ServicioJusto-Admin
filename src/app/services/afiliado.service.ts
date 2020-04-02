import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { AfiliadoModel } from '../models/afiliado.model';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private url = 'https://proyecto-serviciojusto.firebaseio.com';

  constructor( private http: HttpClient ) { }

   /**
   * Permite crear obtener los alfiliado
   * @author Kevin Caicedo
   * @param afiliado 
   */
  getAfiliado(){
    return this.http.get(`${ this.url }/Afiliado.json`)
      .pipe(
        map( this.crearArregloAfiliado )
      );
  }

  /**
   * Modifica un objeto servicio a un array para poder recorrerla
   * @author Kevin Caicedo
   * @param servicio 
   */
  private crearArregloAfiliado( afiliadoObj: object){
    
    const afiliadoArray: AfiliadoModel[] = [];

    if( afiliadoObj === null ){
      return [];
    }

    Object.keys( afiliadoObj ).forEach( key =>{

      const servicio: AfiliadoModel = afiliadoObj[key];
      servicio.id = key;

      afiliadoArray.push( servicio );
    });

    return afiliadoArray;
  }
}
