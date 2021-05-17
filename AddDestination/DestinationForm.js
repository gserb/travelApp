import { LitElement, css, html } from '@lion/core';
import './TravelaLionButton';
import './TravelaLionForm';
import './TravelaLionInput';
import { ajax } from '@lion/ajax';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      travela-lion-form {
        background-color: rgba(245, 245, 245, 255);
      }
      form {
        width: 30vw;
        margin: 0 auto;
        line-height: 2em;
        padding: 2em 0;
      }
      travela-lion-input[label] {
        font-weight: bold;
        font-size: 1.3em;
        padding: 1em 0;
      }

      travela-lion-button {
        margin-top: 1em;
        color: white;
        background-color: #5b6bb1;
        border-radius: 2em;
        padding: 1em 2em;
        font-weight: bold;
      }
      travela-lion-button:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        font-weight: bold;
        transition: 1s;
      }
    `;
  }

  static get properties() {
    return {
      destinations: { type: Object },
    };
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
            name="country"
            label="Location's country"
          ></travela-lion-input>
          <travela-lion-input
            name="description"
            label="Location's description"
          ></travela-lion-input>
          <travela-lion-input
            name="imageUrl"
            label="Location's image"
          ></travela-lion-input>
          <travela-lion-button type="submit">Add location</travela-lion-button>
        </form>
      </travela-lion-form>
    `;
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    this.destinations = Object.fromEntries(formData);
    this._postDestinations(this.destinations);
  }

  async _postDestinations() {
    const { response } = await ajax.fetchJson(
      `https://devschool-2020.firebaseio.com/Vlad/places.json`,
      {
        method: 'POST',
        body: this.destinations,
      }
    );
    console.log(response);
  }
}

customElements.define('destination-form', DestinationForm);
