import { LionInput } from '@lion/input';

class TravelaLionInput extends LionInput {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travela-lion-input', TravelaLionInput);
