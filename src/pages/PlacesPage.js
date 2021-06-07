import { LitElement, html, css } from 'lit-element';
import '../components/travelCard';

export class PlacesPage extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      .places-page {
        display: block;
        max-width: 1000px;
        margin: 8vh auto 0;
      }

      h1 {
        margin: 10vh 0;
        text-align: center;
      }

      nav {
        margin: auto;
      }
      nav ul {
        list-style: none;
        display: flex;
        font-size: 20px;
        padding: 0;
      }

      nav ul li {
        padding: 10px 20px;
      }
      nav ul li a {
        text-decoration: none;
        color: var(--blue);
      }

      nav ul li a:hover {
        color: var(--yellow-100);
      }
      @media screen and (max-width: 1024px) {
        nav ul {
          text-align: center;
          justify-content: center;
        }
      }
      @media screen and (max-width: 768px) {
        nav ul {
          flex-wrap: wrap;
          font-size: 16px;
        }
      }
    `;
  }

  render() {
    return html`
      <section class="places-page">
        <h1>PLACES TO VISIT</h1>
        <nav class="categories">
          <ul>
            <li><a href="#">All places</a></li>
            <li><a href="#">Europe</a></li>
            <li><a href="#">America</a></li>
            <li><a href="#">Africa</a></li>
            <li><a href="#">Asia</a></li>
          </ul>
        </nav>

        <div class="card-places">
          <travel-card></travel-card>
        </div>
      </section>
    `;
  }
}

customElements.define('places-page', PlacesPage);
