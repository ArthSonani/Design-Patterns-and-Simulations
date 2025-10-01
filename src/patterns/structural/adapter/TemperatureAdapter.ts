
import { CelsiusSensor } from './CelsiusSensor';

export interface TemperatureAdapter {
  readFahrenheit(): number;
}

export class TemperatureAdapterImpl implements TemperatureAdapter {
  constructor(private sensor: CelsiusSensor) {}
  readFahrenheit(): number {
    const c = this.sensor.readCelsius();
    return c * 9.0/5.0 + 32;
  }
}

export class TemperatureAdapter {
  static demo() {
    const sensor = new CelsiusSensor();
    const adapter = new TemperatureAdapterImpl(sensor);
    console.log('Temperature in F:', adapter.readFahrenheit());
  }
}
