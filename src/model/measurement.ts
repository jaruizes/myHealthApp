/**
 * Class representing a health measurement
 */
export class Measurement {
  date: string;
  time: string;
  glucose: number;
  systolicPressure: number;
  diastolicPressure: number;
  pulses: number;

  constructor() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();
    let currentHourStr: string = currentHour >= 9 ? `${currentHour}` : `0${currentHour}`;
    let currentMinuteStr: string = currentMinute >= 9 ? `${currentMinute}` : `0${currentMinute}`;
    this.date = currentDate.toISOString();
    this.time = `${currentHourStr}:${currentMinuteStr}`;
  }
}
