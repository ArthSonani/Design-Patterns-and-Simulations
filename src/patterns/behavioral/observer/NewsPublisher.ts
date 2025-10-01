
import { Subscriber } from './Subscriber';
import { ConsoleSubscriber } from './ConsoleSubscriber';
import { logger } from '../../../utils/logger';

export class NewsPublisher {
  private subscribers: Subscriber[] = [];

  subscribe(s: Subscriber) {
    if (!s) throw new Error('subscriber required');
    this.subscribers.push(s);
  }

  unsubscribe(s: Subscriber) {
    this.subscribers = this.subscribers.filter(x => x !== s);
  }

  publish(message: string) {
    logger.info('Publishing: ' + message);
    for (const s of [...this.subscribers]) {
      try {
        s.receive(message);
      } catch (err) {
        logger.warn('Subscriber failed: ' + String(err));
      }
    }
  }

  demo() {
    const a = new ConsoleSubscriber('Alice');
    const b = new ConsoleSubscriber('Bob');
    this.subscribe(a); this.subscribe(b);
    this.publish('Breaking: TypeScript patterns released');
    this.unsubscribe(b);
    this.publish('Update: Bob unsubscribed');
  }
}
