import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { PqrsModel } from '../models/pqrs.model';

@Injectable({
  providedIn: 'root'
})
export class PqrsService {

  private url = 'https://proyecto-serviciojusto.firebaseio.com';

  constructor( private http: HttpClient ) { }

   /**
   * Permite obtener los pqrs
   * @author Kevin Caicedo
   * @param Pqrs 
   */
  getPqrs(){
    return this.http.get(`${ this.url }/Pqrs.json`)
      .pipe(
        map( this.crearArregloPqrs )
      );
  }

  /**
   * Modifica un objeto pqrs a un array para poder recorrerla
   * @author Kevin Caicedo
   * @param Pqrs 
   */
  private crearArregloPqrs( pqrsObj: object){
    
    const pqrsArray: PqrsModel[] = [];

    if( pqrsObj === null ){
      return [];
    }

    Object.keys( pqrsObj ).forEach( key =>{

      const servicio: PqrsModel = pqrsObj[key];
      servicio.id = key;

      pqrsArray.push( servicio );
    });

    return pqrsArray;
  }

  borrarPqrs( id: string ){
    
    return this.http.delete(`${ this.url }/Pqrs/${ id }.json`)
  }



}
