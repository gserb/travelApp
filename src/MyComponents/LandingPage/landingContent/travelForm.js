import { LitElement, html, css } from 'lit-element';

class TravelForm extends LitElement {
  static get styles() {
    return css`
      .travelForm {
        display: flex;
        width: 70%;
        margin: 0 auto;
        justify-content: space-evenly;
        flex-wrap: wrap;
        border: 5px solid #3e4875;
        padding: 5em 4em;
        border-radius: 3em;
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%);
        background-color: rgba(240, 240, 240, 0.8);
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }

      section.travelForm div {
        float: left;
        margin: 10px;
      }
      .travelForm select,
      input {
        padding: 1.2em;
        border-radius: 1.5em;
        outline: none;
        border: 3px solid rgb(200, 200, 200);
        font-weight: bold;
      }
      .travelForm input[type='button']:hover {
        background-color: lightseagreen;
        color: black;
        transition: 1s;
      }
      .travelForm label {
        display: block;
        margin-bottom: 0.5em;
        font-weight: bold;
        font-size: 1.2em;
      }

      .travelForm input[type='button'] {
        border-radius: 1.5em;
        margin-top: 1.5em;
        padding: 2em 3em;
        color: white;
        background-color: #3e4875;
        border-style: none;
        cursor: pointer;
      }

      @media screen and (min-width: 1025px) and (max-width: 1395px) {
        .travelForm {
          position: relative;
          width: 100vw;
          border: none;
          border-radius: 0;
          padding: 0;
          flex-direction: column;
          text-align: center;
        }
        .travelForm input[type='number'] {
          padding: 1.2em 7em;
        }
        .travelForm input[type='date'] {
          padding: 1em 8em;
        }
        .travelForm select {
          padding: 1em 8.7em;
        }
        .travelForm input[type='button'] {
          margin: 0 auto;
          padding: 2em 11em;
          margin-top: 1em;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .travelForm {
          position: relative;
          width: 100vw;
          border: none;
          font-size: 0.8em;
          border-radius: 0;
          padding: 0;
          flex-direction: column;
          text-align: center;
        }
        .travelForm input[type='number'] {
          padding: 1.2em 7em;
        }
        .travelForm input[type='date'] {
          padding: 1em 8em;
        }
        .travelForm select {
          padding: 1em 8.7em;
        }
        .travelForm input[type='button'] {
          margin: 0 auto;
          padding: 2em 11em;
          margin-top: 1em;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        .travelForm {
          position: relative;
          width: 100vw;
          border: none;
          font-size: 0.8em;
          border-radius: 0;
          padding: 0;
          flex-direction: column;
          text-align: center;
        }
        .travelForm input[type='number'] {
          padding: 1.2em 7em;
        }
        .travelForm input[type='date'] {
          padding: 1em 8em;
        }
        .travelForm select {
          padding: 1em 8.7em;
        }
        .travelForm input[type='button'] {
          margin: 0 auto;
          padding: 2em 11em;
          margin-top: 1em;
        }
      }

      @media screen and (min-width: 320px) and (max-width: 480px) {
        .travelForm {
          position: relative;
          width: 100%;
          border: none;
          margin: 0;
          font-size: 0.8em;
          border-radius: 0;
          padding: 0;
          flex-direction: column;
          text-align: center;
        }
        .travelForm input[type='number'] {
          padding: 1.1em 3em;
        }
        .travelForm input[type='date'] {
          padding: 1em 4em;
        }
        .travelForm select {
          padding: 1em 4.7em;
        }
        .travelForm input[type='button'] {
          margin: 0 auto;
          padding: 2em 5em;
          margin-top: 1em;
        }
      }
    `;
  }

  static get properties() {
    return {
      _isLoading: { type: Boolean },
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    if (this._isLoading) {
      return 'Loading...';
    }
    return html`<form>
      <section class="travelForm">
        <div class="destinations">
          <label for="destination">Destination</label>
          <select id="destination">
            <option value="" id="defaultOption" disabled selected hidden>
              <span>Select Location</span>
            </option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>
        <div class="members">
          <label for="member">Member</label>
          <input type="number" name="member" id="member" />
        </div>
        <div>
          <label for="checkin">Check in Date</label>
          <input type="date" name="checkin" id="checkin" />
        </div>
        <div>
          <label for="checkout">Check out Date</label>
          <input type="date" name="checkout" id="checkout" />
        </div>
        <div>
          <input type="button" value="Book Now" />
        </div>
      </section>
    </form>`;
  }
}
customElements.define('travel-form', TravelForm);
