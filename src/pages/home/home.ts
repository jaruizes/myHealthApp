import {Component} from '@angular/core';
import {Medicion} from '../../model/medicion';

import {Mediciones} from "../../model/mediciones";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  medicion: Medicion;
  mediciones: Mediciones;

  constructor() {
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    // TIP: string interpolation.
    let horaStr: string = hora >= 9 ? `${hora}` : `0${hora}`;
    let minutosStr: string = minutos >= 9 ? `${minutos}` : `0${minutos}`;

    this.medicion = new Medicion();
    this.medicion.fecha = fecha.toISOString();
    // TIP: string interpolation.
    this.medicion.hora = `${horaStr}:${minutosStr}`;
  }

  guardar() {
    console.log('Adding medicion........');
    this.mediciones.addMedicion(this.medicion);
  }

}
