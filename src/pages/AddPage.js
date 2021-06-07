import { LitElement, css, html } from '@lion/core';
import '../components/lionForm';
import '../components/lionButton';
import '../components/formInput';
import '../components/travelCardItem';
import '../validators/isValidUrl';
import { ajax } from '@lion/ajax';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required, MinMaxLength, IsString } from '@lion/form-core';
import { isValidType } from '../validators/isValidType';
import { isValidUrl } from '../validators/isValidUrl';

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
      * {
        color: black;
      }

      .content {
        text-align: center;
        max-width: 800px;
        margin: 8vh auto;
      }

      h1 {
        margin: 10vh 0;
        text-align: center;
        font-size: 24px;
      }

      new-destination-form {
        margin: 10% auto;
        padding: 40px;
        background: var(--blue);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
      }

      new-destination-form h1 {
        color: var(--light);
        margin: 0;
      }

      label {
        display: block;
        padding: 20px 0 8px;
        color: #fff;
        text-shadow: 1px 1px 1px #666;
        text-align: start;
      }

      input {
        height: 18px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        box-shadow: 0 0 10px #444;
        border: 1px solid #fff;
      }

      form-button {
        display: block;
        width: 50%;
        margin: 40px auto 0;
        font-size: 17px;
        line-height: 30px;
        color: #ffffff;
        padding: 10px 10px;
        font-weight: 600;
        letter-spacing: 0.02em;
        background-color: var(--yellow-100);
        border-radius: 2px;
        cursor: pointer;
      }

      form-button:hover {
        background-color: rgba(1, 1, 1, 0.5);
      }

      input[type='text']:hover {
        border: 1px solid #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.25) inset,
          0 0 5px rgba(255, 255, 255, 0.4);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    loadDefaultFeedbackMessages();
  }

  render() {
    return html`
      <div class="content">
        <h1>ADD NEW DESTINATIONS</h1>
        <new-destination-form>
          <h1>New destination:</h1>
          <form @submit=${this._handleFormSubmit}>
            <form-input
              name="type"
              placeholder="City"
              label="Type"
              palceholder="City/ Resort/ Mountain"
              .fieldName=${'type'}
              .validators=${[new Required(), new IsString(), new isValidType()]}
            ></form-input>
            <form-input
              name="name"
              placeholder="Bucharest"
              label="City"
              .fieldName=${'name'}
              .validators=${[new Required(), new IsString()]}
            ></form-input>
            <form-input
              name="country"
              placeholder="Romania"
              label="Country"
              .fieldName=${'country'}
              .validators=${[new Required(), new IsString()]}
            ></form-input>
            <form-input
              name="description"
              placeholder="Add a description"
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
              label="Image"
              .fieldName=${'imageUrl'}
              .validators=${[new Required(), new isValidUrl()]}
            ></form-input>
            <form-button type="submit">Add</form-button>
          </form>
        </new-destination-form>
      </div>
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
