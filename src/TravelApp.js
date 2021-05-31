import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import './pages/HomePage';
import './pages/AddPage.js';
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
        display: grid;
        grid-template-areas:
          'header'
          'main'
          'footer';
      }
      nav-component {
        position: fixed;
        grid-area: header;
        z-index: 2;
        width: 100%;
      }

      header.sticky {
        background: var(--light);
      }

      main {
        grid-area: header/header/main/main;
        z-index: 1;
        margin: 0;
      }

      footer-component {
        grid-area: footer;
        background-color: var(--blue);
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
      { path: '(.*)', component: 'home-page' },
    ]);
  }

  render() {
    return html`
      <div class="page-wrapper">
        <nav-component class=""></nav-component>
        <main id="main"></main>
        <footer-component></footer-component>
      </div>
    `;
  }

  _getCustomTitle(newTitle) {
    return `Your new title is ${newTitle}`;
  }
}
