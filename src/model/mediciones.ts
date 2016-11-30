import {Medicion} from "./medicion";
export class Mediciones {
  private lista: Medicion[];

  constructor() {
    this.lista = [];
  }

  addMedicion(medicion:Medicion) {
    this.lista.push(medicion);
  }

  getMediciones() {
    return this.lista;
  }
}
