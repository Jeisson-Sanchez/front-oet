import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../services/vehiculos.service';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../interfaces/vehiculo';
import { PersonasService } from '../services/personas.service';
import { Clasificacion } from '../interfaces/clasificacion';
import { TipoVehiculo } from '../interfaces/tipo-vehiculo';
import { Persona } from '../interfaces/persona';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  vehiculo: Vehiculo = {
    placa:"",
    color:"",
    marca:"",
    id_tipo_vehiculo:"",
    id_conductor:"",
    id_propietario:"",

  };

  sconductor: boolean = false;
  sconductorPropietario: boolean = false;

  clasificaciones: Clasificacion[] = [];
  tipoVehiculos: TipoVehiculo[] = [];
  personas: Persona[] = [];
  dataConductor: Persona[] = [];
  dataPropietario: Persona[] = [];
  dataConductorPropietario: Persona[] = [];

  constructor(private vehiculosService: VehiculosService, private httpClient: HttpClient, private personasService: PersonasService ) {
    this.clasificacion();
    this.tipoVehiculo();
  }

  /**
   * @author Jeisson Sanchez
   * @param string placa,color,marca,id_tipo_vehiculo,id_conductor,id_propietario
   * Metodo para registrar un vehiculo
   */
  strore(){

    if(this.vehiculo.placa== "" || this.vehiculo.color== "" || this.vehiculo.marca== "" || this.vehiculo.id_tipo_vehiculo== "" || this.vehiculo.id_conductor== "" || this.vehiculo.id_propietario== "" ){ 
      alert("Debe llenar todos los campos")
    }else{
      this.vehiculosService.strore(this.vehiculo)
      .subscribe((data) => {
        alert(data);
        this.vehiculo.placa= "";
        this.vehiculo.color= "";
        this.vehiculo.marca= "";
        this.vehiculo.id_tipo_vehiculo= "";
        this.vehiculo.id_conductor= "";
        this.vehiculo.id_propietario= "";
      }, (error) => {
        alert(error)
      });
    }
  }

  /**
   * @author Jeisson Sanchez
   * Metodo para consultar la clasificacion de una persona
   */
  clasificacion(){
    this.personasService.clasificacion()
    .subscribe((data) => {
      this.clasificaciones = data;
    });
  }

  /**
   * @author Jeisson Sanchez
   * Metodo para el tipo de vehiculo
   */
  tipoVehiculo(){
    this.vehiculosService.tipoVehiculo()
    .subscribe((data) => {
      this.tipoVehiculos = data;
    });
  }

  /**
   * @author Jeisson Sanchez
   * @param int id
   * Metodo para buscar las personas segun su clasificacion "propietario o conductor"
   */
  estadoClasificacion(id: any){

    if(id == 1){
      this.sconductor = true;
      this.sconductorPropietario = false;

      this.personasService.filtroClasificacion("1")
      .subscribe((data) => {
        this.dataPropietario = data;
      });

      this.personasService.filtroClasificacion("2")
      .subscribe((data) => {
        this.dataConductor = data;
      });
    }

    if(id == 3){
      this.sconductorPropietario = true;
      this.sconductor = false;
      
      this.personasService.filtroClasificacion("3")
      .subscribe((data) => {
        this.dataConductorPropietario = data;
      });
    }
  }

  ngOnInit(): void {
  }

}
