import { LitElement, html, css } from 'lit-element';

export class TravelDestinationForm extends LitElement {
  static get styles() {
    return css`
      .travel-destination-form {
        text-align: center;
        max-width: 1200px;
        margin: auto;
        padding: 0 30px;
      }

      .form-margins {
        padding: 10px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0.3);
      }

      .form-title {
        color: var(--light);
      }

      .form-content {
        display: flex;
        flex-direction: row;
        align-content: space-around;
        justify-content: space-between;
        border-radius: 40px;
      }

      .form-content input {
        width: 100%;
        border-top-style: hidden;
        border-bottom-style: hidden;
        border-right-style: hidden;
        border-left-style: solid;
        border-color: var(--blue);
        border-width: 1px;
        padding-left: 10px;
        box-sizing: border-box;
      }

      .form-content input:first-child {
        border-radius: 40px 0 0 40px;
        border-left-style: hidden;
      }

      .form-content button {
        background-color: var(--yellow-100);
        color: var(--light);
        width: 100%;
        height: 50px;
        padding: 0;
        margin: 0;
        border-radius: 0 40px 40px 0;
        cursor: pointer;
        border: none;
      }

      .form-content button:hover {
        background-color: var(--blue);
      }

      @media screen and (max-width: 768px) {
        .travel-destination-form {
          max-width: 300px;
        }
        .form-margins {
          padding: 5px;
          border-radius: 10px;
        }
        .form-content {
          flex-direction: column;
          background: none;
          border-radius: 0;
          align-items: center;
          margin: 20px;
        }

        .form-title {
          font-size: 10px;
        }

        .form-content input {
          text-align: center;
          border-left-style: hidden;
          padding: 10px;
          margin-bottom: 10px;
        }

        .form-content input:first-child {
          border-radius: 0;
        }

        .form-content button {
          border-radius: 40px;
          height: 40px;
          width: 150px;
          margin-top: 10px;
        }
      }
    `;
  }

  render() {
    return html`
      <form class="travel-destination-form">
        <div class="form-title">
          <h1>Let us take you away</h1>
        </div>
        <div class="form-margins">
          <div class="form-content">
            <input type="text" placeholder="Destination" required="required" />
            <input
              type="text"
              placeholder="Check-in"
              onfocus="(this.type ='date')"
              required="required"
            />
            <input
              type="text"
              placeholder="Check-out"
              onfocus="(this.type ='date')"
              required="required"
            />

            <input type="number" placeholder="Persons" required="required" />
            <button>Search</button>
          </div>
        </div>
      </form>
    `;
  }
}

customElements.define('travel-destination-form', TravelDestinationForm);
