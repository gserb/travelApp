import { LitElement, html, css } from 'lit-element';
import './travelCity';

class TravelCard extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 16px;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      }
      div {
        background-color: rgba(245, 245, 245, 255);
        width: 100vw;
        padding-bottom: 5em;
      }
      div h1,
      h2 {
        margin-top: 0;
        padding-top: 1em;
        text-align: center;
      }
      h2 {
        margin-bottom: 2em;
      }
      ul {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3em;
        margin: 0 auto;
        padding: 0;
      }
      ul li {
        background-color: white;
        padding: 2em;
        border-radius: 1em;
        list-style-type: none;
      }
      .box {
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
      }
      @media screen and (max-width: 1250px) {
        ul {
          grid-template-columns: auto;
          place-content: center;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        ul {
          max-width: 80vw;
          height: auto;
          display: block;
        }
        ul li {
          margin-bottom: 2em;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        ul {
          max-width: 80vw;
          height: auto;
          display: block;
        }
        ul li {
          margin-bottom: 2em;
        }
      }
    `;
  }

  static get properties() {
    return {
      loading: { type: Boolean },
      placesToTravel: { type: Array },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.placesToTravel) {
      this.fetchPlacesToTravel();
    }
  }

  async fetchPlacesToTravel() {
    this.loading = true;
    const response = await fetch(
      `https://devschool-2020.firebaseio.com/Vlad/places.json`
    );
    const jsonResponse = await response.json();
    this.placesToTravel = jsonResponse;
    this.placesToTravel = Object.values(this.placesToTravel);
    this.loading = false;
  }

  render() {
    return html`
      ${this.loading
        ? html` <p>Loading...</p> `
        : html`<div>
            <h1>Destinations to explore!</h1>
            <h2>Locations</h2>
            <ul>
              ${this.placesToTravel.map(
                item => html`
                  <li class="box">
                    <travel-city .cityTravel=${item}> </travel-city>
                  </li>
                `
              )}
            </ul>
          </div>`}
    `;
  }
}

customElements.define('travel-card', TravelCard);
