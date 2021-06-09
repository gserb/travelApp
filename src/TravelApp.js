import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import './pages/HomePage';
import './pages/AddPage.js';
import './pages/PlacesPage';
import './pages/PlacePage';
import './pages/ContactPage';
import './Components/FooterComponent.js';
import './Components/NavComponent.js';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .page-wrapper {
      }

      #navBar {
        display: block;
        margin: 0;
      }
      .sticky {
        position: fixed;
        top: 0;
        width: 100%;
      }

      header.sticky {
      }

      main {
        display: block;
        margin: 0;
      }

      #footer {
        background-color: var(--blue);
        display: block;
        margin: 0;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'DevSchool app';
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('main');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/add', component: 'add-new-destination' },
      { path: '/places', component: 'places-page' },
      { path: '/contact', component: 'contact-page' },
      { path: '/place', component: 'place-page' },
      { path: '(.*)', component: 'home-page' },
    ]);
  }

  render() {
    return html`
      <div class="page-wrapper">
        <nav-component id="navBar"></nav-component>
        <main id="main"></main>
        <footer-component id="footer"></footer-component>
      </div>
    `;
  }

  _getCustomTitle(newTitle) {
    return `Your new title is ${newTitle}`;
  }
}
