import { LitElement, html, css } from 'lit-element';
import '../src/travelCardItem';

class TravelCard extends LitElement {
  static get properties() {
    return {
      _places: { type: Array },
    };
  }

  static get styles() {
    return css`
      ul {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-bottom: 40px;
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
