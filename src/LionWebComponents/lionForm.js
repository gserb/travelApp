import { LionForm } from '@lion/form';

class NewDestinationForm extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('new-destination-form', NewDestinationForm);
