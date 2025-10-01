
import { PaymentStrategy } from './PaymentStrategy';
import { logger } from '../../../utils/logger';

export class UpiStrategy implements PaymentStrategy {
  constructor(private vpa: string) {
    if (!vpa || !vpa.includes('@')) throw new Error('invalid vpa');
  }
  pay(amount: number): void {
    logger.info(`Processing UPI ${this.vpa} for ${amount}`);
    console.log(`Paid Rs.${amount} via UPI ${this.vpa}`);
  }
}
