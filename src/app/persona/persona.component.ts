import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clasificacion } from '../interfaces/clasificacion';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  clasificaciones: Clasificacion[] = [];
  persona: Persona = {
    n_cedula: "",
    primer_nombre: "",
    segundo_nombre: "",
    apellidos: "",
    direccion: "",
    telefono: "",
    ciudad: "",
    id_clasificacion: "",
  };

  constructor(private personasService: PersonasService, private httpClient: HttpClient) { 
    this.clasificacion();
  }

  /**
   * @author Jeisson Sanchez
   * Metodo para consultar la clasificacion de una persona
   */
  clasificacion(){
    this.personasService.clasificacion()
    .subscribe((data) => {
      this.clasificaciones = data;
      console.log(this.clasificaciones);
    });
  }

  store(){
    console.log(this.persona);
    if(this.persona.n_cedula == "" || this.persona.primer_nombre == "" || this.persona.segundo_nombre == "" || this.persona.apellidos == "" || this.persona.direccion == "" || this.persona.telefono == "" || this.persona.ciudad == "" || this.persona.id_clasificacion == ""){
      alert("Debe llenar todos los campos")
    }else{
      this.personasService.store(this.persona)
      .subscribe((data) => {
        alert(data);
        this.persona.n_cedula = "";
        this.persona.primer_nombre = "";
        this.persona.segundo_nombre = "";
        this.persona.apellidos = "";
        this.persona.direccion = "";
        this.persona.telefono = "";
        this.persona.ciudad = "";
        this.persona.id_clasificacion = "";
      }, (error) => {
        alert(error.error.error);
      });
    }
  }

  ngOnInit(): void {
  }

}
