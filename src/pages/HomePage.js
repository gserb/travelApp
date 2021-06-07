import { LitElement, html, css } from 'lit-element';
import '../components/travelCard';
import '../components/HeroComponent';
import '../components/TravelDestinationForm';

export class HomePage extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }
  static get styles() {
    return css`
      .home-page {
        display: grid;
        grid-template-rows: 100vh 1fr;
        grid-template:
          'hero'
          'main';
      }

      h1 {
        margin: 0 0 8px 0;
        padding: 0;
      }

      h2 {
        position: relative;
        display: block;
        font-size: 40px;
        color: #222222;
        font-weight: 600;
        margin: 0;
        padding-bottom: 24px;
      }

      h2:before {
        position: absolute;
        content: '';
        left: 0px;
        bottom: 0px;
        width: 50px;
        height: 3px;
        background-color: var(--blue-50);
      }

      h3 {
        font-size: 30px;
        margin: 24px 0;
      }

      p {
        margin: 0;
      }

      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
        color: var(--light);
      }

      .hero {
        grid-area: hero;
      }

      .form {
        grid-area: hero;
        margin-top: 50vh;
      }

      .main {
        grid-area: main;
      }

      .main-grid {
        display: grid;
        grid-gap: 20px;
        grid-template-areas:
          'about-us'
          'why-us'
          'popular-places';
        row-gap: 12vh;
        margin: 0 auto;
        max-width: 1000px;
        padding: 12vh 30px;
      }

      .about-us {
        grid-area: about-us;
        display: grid;
        grid-template-areas: 'images content';
        align-items: center;
      }

      .about-us .content {
        grid-area: content;
      }

      .about-us .description {
        margin: 24px 0;
      }

      .about-us .images {
        grid-area: images;
      }

      .about-us .images img {
        max-width: 70%;
        height: auto;
        margin: 0;
      }

      .about-us .images .hotel-image {
        text-align: center;
      }

      .about-us .images .tickets-image {
        margin-left: 0;
        margin-top: -20%;
      }

      .about-us .list {
        margin: 24px 0;
        padding: 0;
      }

      .about-us .list li {
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
      }

      .about-us .button {
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        padding: 10px 30px;
        font-weight: 500;
        letter-spacing: 0.02em;
        background-color: var(--yellow-100);
        border-radius: 2px;
        border: none;
        cursor: pointer;
      }

      .about-us .button:hover {
        background-color: var(--blue);
      }

      .why-us {
        grid-area: why-us;
      }

      .why-us .reasons {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 'reason1 reason2 reason3';
        grid-column-gap: 80px;
        justify-content: stretch;
      }

      .why-us .reasons {
        text-align: justify;
      }

      .why-us .reason1 {
        grid-area: reason1;
      }

      .why-us .reason2 {
        grid-area: reason2;
      }

      .why-us .reason3 {
        grid-area: reason3;
      }

      .why-us img {
        width: 30%;
        height: auto;
        align-self: center;
        display: block;
        margin: 32px auto 0;
      }

      .palces {
        grid-area: popular-places;
      }

      @media screen and (max-width: 1024px) {
        .form {
          margin-top: 35vh;
        }

        .about-us {
          grid-template-areas: 'content' 'images';
        }

        .why-us .reasons {
          grid-template-columns: 1fr;
          grid-template-areas: 'reason1' 'reason2' 'reason3';
          margin: 0 20%;
        }

        .about-us .images {
          width: 80vw;
          margin: 24px auto;
        }

        .about-us .images .hotel-image {
          text-align: end;
          margin: 0;
        }

        .why-us img {
          margin: 0 24px;
          width: 0%;
        }
      }

      @media screen and (max-width: 768px) {
        .form {
          margin-top: 35vh;
        }

        .about-us .images {
          margin: 10vh 0 0;
          text-align: center;
        }

        .about-us .button {
          display: flex;
          margin: auto;
        }

        .why-us .reasons {
          margin: 0;
        }

        .why-us .reason1 > p,
        .why-us .reason2 > p,
        .why-us .reason3 > p {
          display: block;
          vertical-align: center;
          padding: 0;
        }

        .why-us img {
          margin: 20% auto;
          width: 16%;
        }
      }
    `;
  }

  render() {
    return html`
      <section class="home-page">
        <hero-component class="hero"></hero-component>
        <travel-destination-form class="form"></travel-destination-form>
        <main class="main-grid">
          <section class="about-us">
            <div class="content">
              <h1 class="title" id="about_us">ABOUT US</h1>
              <h2>Best trip planning</h2>
              <p class="description">
                Sed lorem ea dolore ut sea, justo at accusam rebum kasd sed
                nonumy vero voluptua. Aliquyam stet dolores eos voluptua, labore
                kasd dolore et labore sadipscing est dolor aliquyam. Accusam
                nonumy ipsum eos et, accusam et dolore consetetur dolores,
                sanctus et magna kasd kasd amet et sanctus. Diam sed est.
              </p>
              <ul class="list">
                <li>✔&emsp; Et amet sit sanctus sit diam sadipscing.</li>
                <li>✔&emsp; Ipsum est dolor.</li>
                <li>✔&emsp; Voluptua sit lorem dolor justo.</li>
              </ul>
              <button class="button" href="#">Contact us</button>
            </div>
            <div class="images">
              <figure class="hotel-image">
                <img
                  class="image1"
                  src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80"
                  alt="Picture of a view form a Paris hotel."
                />
              </figure>
              <figure class="tickets-image">
                <img
                  class="image2"
                  src="https://images.unsplash.com/photo-1576408083550-04cd8224194d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Picture with plane tickets."
                />
              </figure>
            </div>
          </section>

          <section class="why-us">
            <h1 class="title">WHY CHOOSE US?</h1>
            <h2 class="subtitle">The greatest travel experiences</h2>
            <div class="reasons">
              <div class="reason1">
                <h3>Money back</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                  <img
                    src="https://image.flaticon.com/icons/png/512/1077/1077976.png"
                    alt="Suggestive icon for money back"
                  />
                </p>
              </div>
              <div class="reason2">
                <h3>Safety</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                  <img
                    src="https://image.flaticon.com/icons/png/512/1161/1161490.png"
                    alt="Suggestive icon for safety."
                  />
                </p>
              </div>
              <div class="reason3">
                <h3>Comfort</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                  <img
                    src="https://image.flaticon.com/icons/png/512/905/905513.png"
                    alt="Suggestive icon for comfort."
                  />
                </p>
              </div>
            </div>
          </section>

          <section class="places">
            <h1 class="title">POPULAR PLACES</h1>
            <h2 class="subtitle">Most visited places</h2>
            <div class="card-places">
              <travel-card></travel-card>
            </div>
          </section>
        </main>
      </section>
    `;
  }
}

customElements.define('home-page', HomePage);
