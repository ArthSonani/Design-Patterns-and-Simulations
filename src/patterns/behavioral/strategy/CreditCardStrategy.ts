
import { PaymentStrategy } from './PaymentStrategy';
import { logger } from '../../../utils/logger';

export class CreditCardStrategy implements PaymentStrategy {
  constructor(private cardNumber: string, private expiry: string, private cvv: string) {
    if (!cardNumber || !expiry) throw new Error('invalid card details');
  }
  pay(amount: number): void {
    logger.info(`Charging card ${this.cardNumber} for ${amount}`);
    console.log(`Paid Rs.${amount} via Credit Card ending ${this.cardNumber.slice(-4)}`);
  }
}
