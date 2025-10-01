
import { TextComponent } from './TextComponent';
export class PlainText implements TextComponent {
  constructor(private text: string) { if (text === undefined) throw new Error('text required'); }
  render(): string { return this.text; }
}
