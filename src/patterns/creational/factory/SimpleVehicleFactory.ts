
import { Vehicle } from './Vehicle';
import { Car } from './Car';
import { Bike } from './Bike';

export class SimpleVehicleFactory extends (require('./VehicleFactory').VehicleFactory) {
  createVehicle(type: string): Vehicle {
    if (!type) throw new Error('type required');
    switch (type.toLowerCase()) {
      case 'car': return new Car();
      case 'bike': return new Bike();
      default: throw new Error('unknown vehicle: ' + type);
    }
  }
}
module.exports = { SimpleVehicleFactory };
