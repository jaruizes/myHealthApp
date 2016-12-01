import {Measurement} from "../model/measurement";

export class MeasurementService{
  private _measurements: Measurement[];

  constructor() {
    this._measurements = [
      {date: '01/01/2016', time: '09:00', glucose: 90, systolicPressure: 120, diastolicPressure: 80, pulses: 70},
      {date: '01/01/2016', time: '09:00', glucose: 110, systolicPressure: 130, diastolicPressure: 70, pulses: 73},
      {date: '01/01/2016', time: '09:00', glucose: 95, systolicPressure: 110, diastolicPressure: 85, pulses: 75},
      {date: '01/01/2016', time: '09:00', glucose: 80, systolicPressure: 140, diastolicPressure: 90, pulses: 73},
      {date: '01/01/2016', time: '09:00', glucose: 140, systolicPressure: 120, diastolicPressure: 6, pulses: 90},
      {date: '01/01/2016', time: '09:00', glucose: 95, systolicPressure: 130, diastolicPressure: 80, pulses: 87},
      {date: '01/01/2016', time: '09:00', glucose: 105, systolicPressure: 140, diastolicPressure: 100, pulses: 80},
      {date: '01/01/2016', time: '09:00', glucose: 78, systolicPressure: 110, diastolicPressure: 70, pulses: 70},
    ];
  }

  getAll() : Measurement[] {
    return this._measurements;
  }

  add(measurement: Measurement) {
    this._measurements.push(measurement);
  }

}
