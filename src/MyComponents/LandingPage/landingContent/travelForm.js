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
        border: 5px solid rgba(60, 60, 255, 0.2);
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
        padding: 1.2em 2.5em;
        border-radius: 1.5em;
        outline: none;
        border: 3px solid rgb(200, 200, 200);
        color: rgba(200, 200, 200, 0.9);
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
        font-size: 1.5em;
        padding: 1.5em 2em;
        border-radius: 1.5em;
        color: white;
        background-color: #5b6bb1;
        border-style: none;
        cursor: pointer;
      }
      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        .travelForm {
          position: relative;
          width: 100vw;
          /* font-size: 0.5em; */
          border: none;
          border-radius: 0;
        }
        .travelForm input,
        select {
          width: 60vw;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        .travelForm {
          position: relative;
          width: 100vw;
          border: none;
          font-size: 0.8em;
          border-radius: 0;
        }
        .travelForm input,
        select {
          width: 60vw;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        .travelForm {
          position: relative;
          width: 100vw;
          border: none;
          border-radius: 0;
        }
        .travelForm input,
        select {
          width: 60vw;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        .travelForm {
          position: relative;
          border: none;
          margin: 0;
          width: 100vw;
          border-radius: 0;
        }
        .travelForm input,
        select {
          width: 60vw;
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
          <label for="locationsToTravel">Destination</label>
          <select class="locationsToTravel">
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

        <div class="checkIn">
          <label for="checkIn">Check in Date</label>
          <input type="date" name="checkIn" />
        </div>
        <div class="checkOut">
          <label for="checkOut">Check out Date</label>
          <input type="date" name="checkOut" />
        </div>
        <input type="button" value="Book Now" />
      </section>
    </form>`;
  }
}
customElements.define('travel-form', TravelForm);
