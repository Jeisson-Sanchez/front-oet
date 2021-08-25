import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-informe-vehiculos',
  templateUrl: './informe-vehiculos.component.html',
  styleUrls: ['./informe-vehiculos.component.css']
})
export class InformeVehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) {
    this.index();
  }

  /**
   * @author Jeisson Sanchez
   * Metodo que trae todos los vehiculos
   */
  index(){
    this.vehiculosService.index()
    .subscribe(data => {
      this.vehiculos = data;
    });
  }

  ngOnInit(): void {
  }

}
