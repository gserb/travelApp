import { LitElement, html, css } from 'lit-element';
import '../components/travelCard';

export class PlacePage extends LitElement {
  static get properties() {
    return {
      _placeInfo: {
        type: Object,
      },
    };
  }

  static get styles() {
    return css``;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._placeInfo) {
      this._getInfo();
    }
  }

  async _getInfo() {
    const index = window.location.href.indexOf('places/');
    const placeId = window.location.href.substr(index);
    const placeUrl = `https://devschool-2020.firebaseio.com/ana/${placeId}.json`;
    const response = await fetch(placeUrl);
    const data = await response.json();
    this._placeInfo = data;
    window.document.title = this._placeInfo.name;
  }

  render() {
    return html`
      <section class="place-page">
        <h1>${this.destination.name}</h1>
        <img
          src=" https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80"
        />
        <img src="${this._placeInfo.imageUrl}" alt="${this._placeInfo.name}" />
      </section>
    `;
  }
}

customElements.define('place-page', PlacePage);
