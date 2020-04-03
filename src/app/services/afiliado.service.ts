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
   * 
   */
  getAfiliados(){
    return this.http.get(`${ this.url }/Afiliado.json`)
      .pipe(
        map( this.crearArregloAfiliado )
      );
  }

  /**
   * Modifica un objeto afiliado a un array para poder recorrerla
   * @author Kevin Caicedo
   * @param afiliadoObj 
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


  /**
   * Obtiene solo un afiliado
   * @author Kevin Caicedo
   * @param id 
   */
  getAfiliado( id: string){
    return this.http.get(`${ this.url }/Afiliado/${ id }.json`);
  }

  borrarAfiliado( id: string ){
     return this.http.delete(`${ this.url }/Afiliado/${ id }.json`);
  }


  /**
   * Cuando se acepta candidato, esta pasa a ser Afiliado.
   * @author Kevin Caicedo
   * @param afiliado 
   */
  cambiaEstado( afiliado: AfiliadoModel ){

    const afiliadoTemp = {
      ...afiliado
    };

    delete afiliadoTemp.id;
    
    return this.http.put(`${ this.url }/Afiliado/${ afiliado.id }.json`, afiliadoTemp);

  }

}
