
import readline from 'readline';
import { logger } from './utils/logger';
import { NewsPublisher } from './patterns/behavioral/observer/NewsPublisher';
import { PaymentContext } from './patterns/behavioral/strategy/PaymentContext';
import { VehicleFactory } from './patterns/creational/factory/VehicleFactory';
import { User } from './patterns/creational/builder/User';
import { TemperatureAdapter } from './patterns/structural/adapter/TemperatureAdapter';
import { TextDecorator } from './patterns/structural/decorator/TextDecorator';

async function startCLI() {
  logger.info('Starting TypeScript Design Patterns Demo CLI');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  console.log("Type 'help' to see commands. 'quit' to exit.");

  for await (const line of rl) {
    const cmd = line.trim().toLowerCase();
    try {
      switch (cmd) {
        case 'help':
          console.log('Commands: help, demo-observer, demo-strategy, demo-factory, demo-builder, demo-adapter, demo-decorator, quit');
          break;
        case 'demo-observer':
          new NewsPublisher().demo();
          break;
        case 'demo-strategy':
          PaymentContext.demo();
          break;
        case 'demo-factory':
          VehicleFactory.demo();
          break;
        case 'demo-builder':
          demoBuilder();
          break;
        case 'demo-adapter':
          TemperatureAdapter.demo();
          break;
        case 'demo-decorator':
          TextDecorator.demo();
          break;
        case 'quit':
          console.log('Shutting down...');
          rl.close();
          process.exit(0);
        default:
          console.log('Unknown command:', cmd);
      }
    } catch (err) {
      logger.error('Error handling command: ' + (err instanceof Error ? err.stack : String(err)));
    }
  }
}

function demoBuilder() {
  const user = new User.Builder().withId(1001).withName('Arth').withEmail('arth@example.com').build();
  console.log('Built user:', user.toString());
}

startCLI().catch(e => {
  logger.error('Fatal: ' + (e instanceof Error ? e.stack : String(e)));
  process.exit(1);
});
