import { LitElement, html, css } from 'lit-element';

import './MyComponents/navBar/navBar';
import './MyComponents/travelForm/travelForm';
import './MyComponents/contentDescription/contentDescription';
import './MyComponents/TravelCard/travelCard';
import './MyComponents/footer/footer';
import './LionComponents/AddDestination/DestinationForm';

class MyApplication extends LitElement {
  constructor() {
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return html`
      <navbar-component></navbar-component>
      <travel-form></travel-form>
      <content-description></content-description>
      <travel-card id="placesToTravel"></travel-card>
      <destination-form></destination-form>
      <footer-component></footer-component>
    `;
  }
}
customElements.define('my-application', MyApplication);
