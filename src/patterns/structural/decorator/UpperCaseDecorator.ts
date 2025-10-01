
import { TextComponent } from './TextComponent';
export class UpperCaseDecorator implements TextComponent {
  constructor(private inner: TextComponent) {}
  render(): string { return this.inner.render().toUpperCase(); }
}
