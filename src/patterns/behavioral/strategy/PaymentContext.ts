
import { CreditCardStrategy } from './CreditCardStrategy';
import { UpiStrategy } from './UpiStrategy';
import { Processor } from './Processor';

export class PaymentContext {
  static demo() {
    const card = new CreditCardStrategy('4111-xxxx-xxxx-1111', '12/25', '123');
    const upi = new UpiStrategy('arth@upi');
    const p = new Processor(card);
    p.pay(100.0);
    p.setStrategy(upi);
    p.pay(49.99);
  }
}
