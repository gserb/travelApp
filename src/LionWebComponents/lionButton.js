import { LionButton } from '@lion/button';

export class FormButton extends LionButton {
  static get styles() {
    return super.styles;
  }
}

customElements.define('form-button', FormButton);
