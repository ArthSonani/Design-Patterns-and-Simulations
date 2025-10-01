
import { PaymentStrategy } from './PaymentStrategy';

export class Processor {
  private strategy: PaymentStrategy;
  constructor(strategy: PaymentStrategy) { this.strategy = strategy; }
  setStrategy(strategy: PaymentStrategy) {
    if (!strategy) throw new Error('strategy required');
    this.strategy = strategy;
  }
  pay(amount: number) { this.strategy.pay(amount); }
}
