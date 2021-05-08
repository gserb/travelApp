import {
  LitElement,
  html,
  css,
} from '../node_modules/lit-element/lit-element.js';

class TravelCity extends LitElement {
  static get styles() {
    return css`
      img {
        height: 500px;
        width: 500px;
      }
      h3 {
        color: rgb(80, 80, 80);
      }
      p {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: grey;
      }
    `;
  }

  static get properties() {
    return {
      cityTravel: { type: Object },
    };
  }
  render() {
    return html`
      <div>
        <img src=${this.cityTravel.imageUrl} />
        <h1>${this.cityTravel.name}</h1>
        <h3>${this.cityTravel.country}</h3>
        <p>Description: ${this.cityTravel.description}</p>
      </div>
    `;
  }
}

customElements.define('travel-city', TravelCity);
