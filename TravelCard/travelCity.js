import {
  LitElement,
  html,
  css,
} from '../node_modules/lit-element/lit-element.js';

class TravelCity extends LitElement {
  static get styles() {
    return css`
      :host {
        font-size: 16px;
      }
      img {
        height: 260px;
        width: 510px;
      }
      h3 {
        color: rgb(80, 80, 80);
      }
      p {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: grey;
      }
      @media screen and (min-width: 320px) and (max-width: 768px) {
        img {
          width: 100%;
          height: 30vh;
        }
        h1,
        h3,
        p {
          font-size: 1.2em;
        }
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