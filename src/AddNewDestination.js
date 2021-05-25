import { LitElement, css, html } from '@lion/core';
import './LionWebComponents/lionForm';
import './LionWebComponents/lionButton';
import './LionWebComponents/formInput';
import './Validators/isValidType';
import { ajax } from '@lion/ajax';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required, MinMaxLength, IsString } from '@lion/form-core';
import { isValidType } from './Validators/isValidType';
import { isValidUrl } from './Validators/isValidUrl';

class AddNewDestination extends LitElement {
  static get properties() {
    return {
      destination: {
        type: Object,
      },
    };
  }

  static get styles() {
    return css`
      new-destination-form {
        display: flex;
        padding: 40px;

        flex-direction: column;
        width: 50%;
        align-items: center;
      }
      form {
        display: flex;
        align-self: center;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    loadDefaultFeedbackMessages();
  }

  render() {
    return html`
      <new-destination-form>
        <h1>Add a new destination:</h1>
        <form @submit=${this._handleFormSubmit}>
          <form-input
            name="type"
            label="Type"
            .fieldName=${'type'}
            .validators=${[new Required(), new IsString(), new isValidType()]}
          ></form-input>
          <form-input
            name="name"
            label="City"
            .fieldName=${'name'}
            .validators=${[new Required(), new IsString()]}
          ></form-input>
          <form-input
            name="country"
            label="Country"
            .fieldName=${'country'}
            .validators=${[new Required(), new IsString()]}
          ></form-input>
          <form-input
            name="description"
            label="Description"
            .fieldName=${'description'}
            .validators=${[
              new Required(),
              new MinMaxLength({
                min: 10,
                max: 100,
              }),
            ]}
          ></form-input>
          <form-input
            name="imageUrl"
            placeholder="Add image URL"
            label="Image URL"
            .fieldName=${'imageUrl'}
            .validators=${[new Required(), new isValidUrl()]}
          ></form-input>
          <form-button type="submit">Add destination</form-button>
        </form>
      </new-destination-form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this.destination = Object.fromEntries(formData);
    const isFormValid = !form.parentElement.showsFeedbackFor.includes('error');
    if (isFormValid) {
      this._postDestination(this.destination);
      form.reset();
    }
  }

  async _postDestination() {
    const { response } = await ajax.fetchJson(
      'https://devschool-2020.firebaseio.com/ana/places.json',
      {
        method: 'POST',
        body: this.destination,
      }
    );
    console.log(response);
  }
}

customElements.define('add-new-destination', AddNewDestination);
