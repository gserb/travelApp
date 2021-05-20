import { LitElement, html, css } from 'lit-element';

import './landingContent/travelForm';
import './landingContent/contentDescription';

class LandingPage extends LitElement {
  static get styles() {
    return css``;
  }
  render() {
    return html`
      <travel-form></travel-form>
      <content-description></content-description>
    `;
  }
}
customElements.define('landing-page', LandingPage);
