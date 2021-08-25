import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { PersonasService } from '../services/personas.service';

@Component({
  selector: 'app-informe-personas',
  templateUrl: './informe-personas.component.html',
  styleUrls: ['./informe-personas.component.css']
})
export class InformePersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService) {
    this.index();
  }

  /**
   * @author Jeisson Sanchez
   * metodo que trae todas las personas
   */
  index(){
    this.personasService.index()
    .subscribe(data => {
      this.personas = data;
    })
  }

  ngOnInit(): void {
  }

}
