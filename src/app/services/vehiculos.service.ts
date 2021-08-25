import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoVehiculo } from '../interfaces/tipo-vehiculo';
import { Vehiculo } from './../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  API_ENDPONIT = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  strore(vehiculo: Vehiculo){
    const path = this.API_ENDPONIT + '/vehiculo';
    return this.http.post(path, vehiculo);
  }

  tipoVehiculo(){
    const path = this.API_ENDPONIT + '/tipoVehiculo';
    return this.http.get<TipoVehiculo[]>(path);
  }

}
