import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioModel } from '../models/servicio.model';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private url = 'https://proyecto-serviciojusto.firebaseio.com';

  constructor( private http: HttpClient) { 

  }

  /**
   * Permite crear un servicio como aseo, plomería entre otras
   * @author Kevin Caicedo
   * @param servicio 
   */
  crearServicio( servicio: ServicioModel){

    return this.http.post(` ${ this.url }/Servicio.json`, servicio)
      .pipe(
        map( (resp: any) => {
          servicio.id = resp.name;
          return servicio;
        })
      );

  }

  /**
   * Permite actualizar un servicio como aseo, plomería entre otras
   * @author Kevin Caicedo
   * @param servicio 
   */
  actualizarServicio( servicio: ServicioModel ){

    const servicioTemp = {
      ...servicio
    };

    delete servicioTemp.id;
    
    return this.http.put(`${ this.url }/Servicio/${ servicio.id }.json`, servicioTemp);
  }

  /**
   * Permite crear obtener los servicios como aseo, plomería entre otras
   * @author Kevin Caicedo
   * @param servicio 
   */
  getServicios(){
    return this.http.get(`${ this.url }/Servicio.json`)
      .pipe(
        map( this.crearArregloServicio )
      );
  }

  /**
   * Modifica un objeto servicio a un array para poder recorrerla
   * @author Kevin Caicedo
   * @param servicio 
   */
  private crearArregloServicio( servicioObj: object){
    
    const servicioArray: ServicioModel[] = [];

    if( servicioObj === null ){
      return [];
    }

    Object.keys( servicioObj ).forEach( key =>{

      const servicio: ServicioModel = servicioObj[key];
      servicio.id = key;

      servicioArray.push( servicio );
    });

    return servicioArray;
  }
}
