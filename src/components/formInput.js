import { LionInput } from '@lion/input';

class FormInput extends LionInput {
  static get styles() {
    return super.styles;
  }
}

customElements.define('form-input', FormInput);
