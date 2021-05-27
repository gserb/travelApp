import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import './MyComponents/navBar/navBar';
import './MyComponents/footer/footer';
import './MyComponents/LandingPage/landingContent/DestinationForm';
import './MyComponents/LandingPage/landingContent/travelCard';
import './MyComponents/LandingPage/LandingPage';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('main');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'landing-page' },
      {
        path: '/places-to-travel',
        component: 'travel-card',
      },
      { path: '/add-destination', component: 'destination-form' },
    ]);
  }

  render() {
    return html`
      <navbar-component></navbar-component>
      <main id="main"></main>
      <footer-component></footer-component>
    `;
  }
}
