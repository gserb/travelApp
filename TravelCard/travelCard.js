import {
  LitElement,
  html,
  css,
} from '../node_modules/lit-element/lit-element.js';
import './travelCity';

class TravelCard extends LitElement {
  static get styles() {
    return css`
      div {
        background-color: rgba(245, 245, 245, 255);
        width: 100vw;
        padding-bottom: 5em;
        font-family: sans-serif;
      }
      div h1,
      h2 {
        margin-top: 0;
        padding-top: 1em;
        text-align: center;
        margin-left: 1em;
      }
      h2 {
        margin-bottom: 2em;
        margin-left: 1em;
      }
      ul {
        max-width: 1200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3em;
        margin: 0 auto;
      }
      ul li {
        background-color: white;
        padding: 2em;
        border-radius: 1em;
        list-style-type: none;
      }
    `;
  }
  static get properties() {
    return {
      loading: { type: Boolean },
      data: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    if (!this.data) {
      this.fetchData();
    }
  }
  async fetchData() {
    this.loading = true;
    const apiId = '-M_KgYuxrPPMlPcuhWQ_';
    const response = await fetch(
      `https://devschool-2020.firebaseio.com/Vlad/places/${apiId}.json`
    );
    const jsonResponse = await response.json();
    this.data = jsonResponse;
    this.loading = false;
  }

  render() {
    if (this.loading) {
      return html` <p>Loading...</p> `;
    }
    return html`
      <div>
        <h1>Destionations to explore!</h1>
        <h2>Locations</h2>
        <ul>
          ${this.data.map(
            item => html`
              <li>
                <travel-city .cityTravel=${item}> </travel-city>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}

customElements.define('travel-card', TravelCard);
