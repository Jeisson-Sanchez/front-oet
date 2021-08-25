import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clasificacion } from '../interfaces/clasificacion';
import { Persona } from '../interfaces/persona';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  API_ENDPOINT = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  index(){
    const path = this.API_ENDPOINT + '/persona';
    return this.http.get<Persona[]>(path);
  }

  clasificacion(){
    const path = this.API_ENDPOINT + '/clasificacion';
    return this.http.get<Clasificacion[]>(path);
  }

  filtroClasificacion(id: string){
    const path = this.API_ENDPOINT + '/filtroClasificacion/' + id;
    return this.http.get<Persona[]>(path);
  }
}
