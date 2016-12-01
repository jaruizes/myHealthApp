import {Component} from '@angular/core';
import {Measurement} from '../../model/measurement';
import {MeasurementService} from '../../services/measurement.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  measurements: Measurement[];
  measurement: Measurement;

  constructor(private _measurementSrv: MeasurementService) {
    this.measurements = _measurementSrv.getAll();
    this.measurement = new Measurement();
    console.log(this.measurements);
  }

  addMeasurement() {
    console.log('Adding medicion........');
    this._measurementSrv.add(this.measurement);
    this.measurements = this._measurementSrv.getAll();
    this.measurement = new Measurement();
    console.log('--> ' + this.measurements.length)
  }

}
