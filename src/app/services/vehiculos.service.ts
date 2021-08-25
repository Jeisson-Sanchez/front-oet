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
  
  /**
   * @author Jeisson Sanchez
   * Metodo que trae todos los vehiculos
   */
  index(){
    const path = this.API_ENDPONIT + '/vehiculo';
    return this.http.get<Vehiculo[]>(path);
  }

  /** 
   * @author Jeisson Sanchez
   * @param object vehiculo
   * servicio que registra un vehiculo
   */
  strore(vehiculo: Vehiculo){
    const path = this.API_ENDPONIT + '/vehiculo';
    return this.http.post(path, vehiculo);
  }

  /** 
   * @author Jeisson Sanchez
   * servicio que trae el tipo de vehiculo
   */
  tipoVehiculo(){
    const path = this.API_ENDPONIT + '/tipoVehiculo';
    return this.http.get<TipoVehiculo[]>(path);
  }

}
