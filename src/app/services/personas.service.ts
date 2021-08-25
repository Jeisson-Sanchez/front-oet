import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clasificacion } from '../interfaces/clasificacion';
import { Persona } from '../interfaces/persona';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  /** url del back */
  API_ENDPOINT = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  /** 
   * @author Jeisson Sanchez
   * servicio que trae todas las personas 
   */
  index(){
    const path = this.API_ENDPOINT + '/persona';
    return this.http.get<Persona[]>(path);
  }

  /** 
   * @author Jeisson Sanchez
   * servicio que trae las clasificaciones de una persona
   */
  clasificacion(){
    const path = this.API_ENDPOINT + '/clasificacion';
    return this.http.get<Clasificacion[]>(path);
  }

  /** 
   * @author Jeisson Sanchez
   * servicio que trae todas las personas por clasificacion "filtro"
   */
  filtroClasificacion(id: string){
    const path = this.API_ENDPOINT + '/filtroClasificacion/' + id;
    return this.http.get<Persona[]>(path);
  }
}
