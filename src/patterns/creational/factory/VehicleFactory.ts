
import { Vehicle } from './Vehicle';
import { Car } from './Car';
import { Bike } from './Bike';

export abstract class VehicleFactory {
  abstract createVehicle(type: string): Vehicle;

  static demo() {
    const factory = new (require('./SimpleVehicleFactory').SimpleVehicleFactory)();
    const v1 = factory.createVehicle('car'); v1.drive();
    const v2 = factory.createVehicle('bike'); v2.drive();
  }
}
