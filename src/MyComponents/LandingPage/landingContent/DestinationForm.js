import { LitElement, css, html } from 'lit-element';
import '../../LionWebComponents/TravelaLionButton';
import '../../LionWebComponents/TravelaLionForm';
import '../../LionWebComponents/TravelaLionInput';

import { ajax } from '@lion/ajax';
import { MinMaxLength, Required, MinLength } from '@lion/form-core';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { IsRomania } from '../../LionWebComponents/isRomania';

class DestinationForm extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      travela-lion-form {
        background-color: rgba(245, 245, 245, 255);
        padding: 1em 3em;
      }
      form {
        width: 30vw;

        margin: 0 auto;
        padding: 1em 0;
      }
      travela-lion-input {
        font-weight: bold;
        font-size: 1.4em;
        padding: 1em 0;
      }

      travela-lion-button {
        margin-top: 2em;
        color: white;
        background-color: #5b6bb1;
        border-radius: 2em;
        padding: 1.5em 3em;
        font-weight: bold;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      }
      travela-lion-button:hover {
        background-color: white;
        color: black;
        cursor: pointer;
        font-weight: bold;
        transition: 1s;
      }
      h1 {
        margin: 0;
        text-align: center;
        padding-top: 1em;
      }
      input {
        border-radius: 1.5em;
        padding: 1em 0;
        border: 1px solid rgba(230, 230, 230, 255);
        outline: none;
        margin-top: 0.3em;
        cursor: pointer;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      }
      [type='error'] {
        color: red;
      }
    `;
  }

  static get properties() {
    return {
      destinations: { type: Object },
      _getMessage: {
        type: String,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    loadDefaultFeedbackMessages();
  }

  render() {
    return html`
      <travela-lion-form>
        <h1>Add a destination!</h1>
        <form @submit=${this._handleFormSubmit}>
          <travela-lion-input
            name="name"
            label="Location's name"
            .validators=${[
              new MinMaxLength(
                { min: 5, max: 20 },
                {
                  getMessage: () => 'Please enter between 5 and 20 characters!',
                }
              ),
              new Required(),
              new IsRomania(),
            ]}
          ></travela-lion-input>
          <travela-lion-input
            name="country"
            label="Location's country"
            .validators=${[
              new MinLength(2, {
                getMessage: () => 'Please enter at least 2 characters',
              }),
              new Required(),
            ]}
          ></travela-lion-input>
          <travela-lion-input
            name="description"
            label="Location's description"
            .validators=${[
              new MinMaxLength(
                { min: 5, max: 100 },
                {
                  getMessage: () =>
                    'Please enter between 5 and 100 characters!',
                }
              ),
              new Required(),
            ]}
          ></travela-lion-input>
          <travela-lion-input
            name="imageUrl"
            label="Location's image"
            .validators=${[new Required()]}
          ></travela-lion-input>
          <travela-lion-button type="submit">Add location</travela-lion-button>
        </form>
      </travela-lion-form>
    `;
  }

  static async _getMessage({ fieldName }) {
    return `Please fill in ${fieldName}`;
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    this.destinations = Object.fromEntries(formData);
    const isFormValid = !form.parentElement.showsFeedbackFor.includes('error');
    if (isFormValid) {
      this._postDestinations(this.destinations);
    }
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
