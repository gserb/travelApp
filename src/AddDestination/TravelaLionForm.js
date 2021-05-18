import { LionForm } from '@lion/form';

class TravelaLionForm extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travela-lion-form', TravelaLionForm);
