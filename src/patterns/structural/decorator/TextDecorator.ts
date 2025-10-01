
import { PlainText } from './PlainText';
import { UpperCaseDecorator } from './UpperCaseDecorator';

export class TextDecorator {
  static demo() {
    const base = new PlainText('hello decorator');
    const upper = new UpperCaseDecorator(base);
    console.log('Decorated text:', upper.render());
  }
}
