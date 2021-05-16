import { LitElement, css, html } from '@lion/core';
import './TravelaLionButton';
import './TravelaLionForm';
import './TravelaLionInput';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      lion-button {
        padding: 50px;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <travela-lion-form>
        <form @submit=${this._handleFormSubmit}>
          <travela-lion-input
            name="name"
            label="Location's name"
          ></travela-lion-input>
          <travela-lion-input
            name="type"
            label="Location's type"
          ></travela-lion-input>
          <travela-lion-input
            name="description"
            label="Location's description"
          ></travela-lion-input>
          <travela-lion-input
            name="imageUrl"
            label="Location's picture"
          ></travela-lion-input>
          <travela-lion-button type="submit">Add location</travela-lion-button>
        </form>
      </travela-lion-form>
    `;
  }
}

customElements.define('destination-form', DestinationForm);
