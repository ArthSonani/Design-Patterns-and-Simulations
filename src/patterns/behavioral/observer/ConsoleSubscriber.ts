
import { Subscriber } from './Subscriber';
import { logger } from '../../../utils/logger';

export class ConsoleSubscriber implements Subscriber {
  constructor(private name: string) {
    if (!name) throw new Error('name required');
  }
  receive(message: string): void {
    logger.info(`${this.name} received -> ${message}`);
    console.log(`[${this.name}] ${message}`);
  }
}
