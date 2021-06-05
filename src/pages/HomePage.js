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

      .hero {
        grid-area: hero;
        width: 100%;
      }

      .form {
        grid-area: hero;
        width: 100%;
        margin-top: 50vh;
      }

      .main {
        grid-area: main;
      }

      .main-grid {
        display: grid;
        grid-gap: 20px;
        grid-template-areas:
          'content1'
          'content2'
          'content3';
        column-gap: 5%;
        margin: 0 auto;
        max-width: 1000px;
        padding: 120px 30px 70px;
      }

      ul {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      .about-us {
        grid-area: content1;
        display: grid;
        grid-template-areas: 'about-us-images about-us-text';
        padding-bottom: 70px;
        align-items: center;
      }

      .about-us-text {
        grid-area: about-us-text;
      }

      .about-us-images {
        grid-area: about-us-images;
      }

      .about-us-images img {
        max-width: 70%;
        height: auto;
      }

      .about-us-images .hotel-image {
        text-align: center;
      }

      .about-us-images .tickets-image {
        margin-left: 0;
        margin-top: -20%;
      }

      .about-us-title {
        position: relative;
        z-index: 1;
        margin-bottom: 60px;
      }

      h2 {
        position: relative;
        display: block;
        font-size: 40px;
        color: #222222;
        font-weight: 600;
        padding-bottom: 18px;
      }
      h3 {
        font-size: 30px;
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
      .about-us .text {
        position: relative;
        font-size: 16px;
        line-height: 26px;
        color: #848484;
        font-weight: 400;
        margin-top: 35px;
      }

      .list {
        margin-top: 32px;
        margin-bottom: 20px;
        padding-left: 0;
      }

      .list li {
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        margin-bottom: 12px;
      }

      .button {
        display: inline-block;
        font-size: 17px;
        line-height: 30px;
        color: #ffffff;
        padding: 10px 30px;
        font-weight: 600;
        letter-spacing: 0.02em;
        background-color: var(--yellow-100);
        border-radius: 2px;
        margin-top: 20px;
      }

      .button:hover {
        background-color: var(--blue);
      }
      a {
        text-decoration: none;
        color: var(--light);
      }

      .about-us image {
        position: relative;
      }

      .why-us {
        grid-area: content2;
        display: grid;
        grid-template-areas: 'title title title' 'reason1 reason2 reason3';
        grid-column-gap: 80px;
        padding-bottom: 70px;
      }
      .why-us .title {
        grid-area: title;
      }

      .why-us .subtitle {
        grid-area: title;
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
        margin: 30px auto;
      }
      .palces {
        grid-area: content3;
        padding-bottom: 70px;
      }

      @media screen and (max-width: 1024px) {
        .form {
          margin-top: 35vh;
        }
        .about-us {
          grid-template-areas: 'about-us-text' 'about-us-images';
        }
        .why-us {
          grid-template-areas: 'title' 'reason1' 'reason2' 'reason3';
        }

        .why-us h3 {
          padding: 0 20%;
        }

        .why-us .reason1 > p,
        .why-us .reason2 > p,
        .why-us .reason3 > p {
          display: flex;
          vertical-align: center;
          padding: 0 20%;
        }

        .why-us img {
          margin: -20px;
          margin-left: 100px;
          width: 16%;
        }
      }

      @media screen and (max-width: 768px) {
        .form {
          margin-top: 35vh;
        }
        .why-us h3 {
          padding: 0;
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
      <div class="home-page">
        <hero-component class="hero"></hero-component>
        <travel-destination-form class="form"></travel-destination-form>

        <main class="main-grid">
          <section class="about-us">
            <div class="about-us-text">
              <div class="about-us-title">
                <span class="title">ABOUT US</span>
                <h2>Best trip planning</h2>
              </div>
              <div class="description">
                Sed lorem ea dolore ut sea, justo at accusam rebum kasd sed
                nonumy vero voluptua. Aliquyam stet dolores eos voluptua, labore
                kasd dolore et labore sadipscing est dolor aliquyam. Accusam
                nonumy ipsum eos et, accusam et dolore consetetur dolores,
                sanctus et magna kasd kasd amet et sanctus. Diam sed est.
              </div>
              <ul class="list">
                <li>✔&emsp; Et amet sit sanctus sit diam sadipscing.</li>
                <li>✔&emsp; Ipsum est dolor.</li>
                <li>✔&emsp; Voluptua sit lorem dolor justo.</li>
                <i class="fas fa-cloud"></i>
              </ul>
              <div class="button">
                <a href="#">Contact us</a>
              </div>
            </div>
            <div class="about-us-images">
              <figure class="hotel-image">
                <img
                  class="image1"
                  src="https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=936&q=80"
                  alt=""
                />
              </figure>
              <figure class="tickets-image">
                <img
                  class="image2"
                  src="https://images.unsplash.com/photo-1576408083550-04cd8224194d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                />
              </figure>
            </div>
          </section>

          <section class="why-us">
            <span class="title"><span class="word-highlighter">WHY</span> CHOOSE US?</span>
            <h2 class="subtitle">The greatest travel experiences</h2>            
            <div class="reason1">
              <h3>Money back</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                iure unde delectus voluptates, iste voluptatem asperiores.
                Numquam similique vel in tempore veritatis iusto aspernatur
                repellat. Perspiciatis pariatur commodi consequatur quas.
                Possimus. 
              <img src="https://image.flaticon.com/icons/png/512/1077/1077976.png" alt=""></p>
               
            </div>
            <div class="reason2">
              <h3>Safety</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                iure unde delectus voluptates, iste voluptatem asperiores.
                Numquam similique vel in tempore veritatis iusto aspernatur
                repellat. Perspiciatis pariatur commodi consequatur quas.
                Possimus.
              <img src="https://image.flaticon.com/icons/png/512/1161/1161490.png" alt=""></p>
                
            </div>
            <div class="reason3">
              <h3>Comfort</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                iure unde delectus voluptates, iste voluptatem asperiores.
                Numquam similique vel in tempore veritatis iusto aspernatur
                repellat. Perspiciatis pariatur commodi consequatur quas.
                Possimus.
              <img src="https://image.flaticon.com/icons/png/512/905/905513.png" alt=""></p>
            </div>
          </section>

          <section class="places">
            <span>POPULAR PLACES</span>
            <h2 class="subtitle">
              Most <span class="word-highlighter">visited places</span>
            </h1>
            <div class="card-places">
              <travel-card></travel-card>
            </div>
          </section>
        </main>
      </div> 
        </main>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
