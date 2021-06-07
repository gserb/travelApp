import { LitElement, html, css } from 'lit-element';
import './travelCardItem';

class TravelCard extends LitElement {
  static get properties() {
    return {
      _places: { type: Array },
    };
  }

  static get styles() {
    return css`
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: 0 0 40px;
        padding: 0;
        list-style: none;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/ana/places.json')
      .then(response => response.json())
      .then(data => {
        this._places = data;
      });
  }

  render() {
    return html`
      <ul>
        ${Object.entries(this._places).map(
          ([, place]) => html`
            <li>
              <travel-card-item .destination=${place}></travel-card-item>
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('travel-card', TravelCard);
