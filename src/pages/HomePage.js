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

      @media screen and (max-width: 768px) {
        .form {
          margin-top: 35vh;
        }
      }

      .wrapper {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: 20% 1fr;
        grid-template-areas:
          'side-bar content1'
          'content2 content2';
        row-gap: 1%;
        column-gap: 5%;
        margin: 0 10%;
      }

      .side-bar {
        margin-top: 40px;
        display: inline-flex;
        align-items: center;
        grid-area: side-bar;
      }

      .about-us {
        grid-area: content1;
        margin-top: 40px;
        text-align: center;
      }

      .about-us > p {
        text-align: left;
      }

      .row {
        display: flex;
        justify-content: space-between;
      }

      .reason-col {
        flex-basis: 32%;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        padding: 20px 12px;
        box-sizing: border-box;
        box-shadow: 8px 0px 16px rgba(0, 0, 0, 0.3);
      }

      .places {
        grid-area: content2;
        text-align: center;
        padding-bottom: 40px;
      }

      .word-highlighter {
        color: var(--yellow);
        font-weight: bold;
      }

      .subtitle {
        font-size: 30px;
      }

      @media screen and (max-width: 1024px) {
        .search-destination-content {
          flex-direction: column;
          width: 50%;
        }
        .travel-destination-form {
          top: 35%;
        }

        .side-bar {
          margin: auto 0;
          display: none;
        }
        .wrapper {
          grid-template-columns: 0% 1fr;
          grid-gap: 0;
        }
      }

      @media screen and (max-width: 768px) {
        .travel-destination-form {
          top: 30%;
        }
        .row {
          flex-direction: column;
        }
        .reason-col {
          margin: 10px 0;
        }
        .side-bar {
          display: none;
        }
        .wrapper {
          grid-template-columns: 0% 1fr;
          grid-gap: 0;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="home-page">
        <hero-component class="hero"></hero-component>
        <travel-destination-form class="form"></travel-destination-form>
        <main class="wrapper">
          <section class="side-bar">
            <ul>
              <h2>News</h2>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
              <li>
                <h4>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, amet.
                </h4>
              </li>
            </ul>
          </section>

          <section class="about-us">
            <h1 class="subtitle">
              A few words <span class="word-highlighter">about us</span>
            </h1>
            <p class="about-us-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates asperiores perspiciatis quidem voluptatem accusantium
              minima ea earum quod, error autem cupiditate vitae voluptas
              pariatur aperiam perferendis fuga ex cumque neque itaque provident
              exercitationem voluptatum quae non! Dolor sint consectetur
              aperiam?
            </p>
            <h1 class="subtitle">
              <span class="word-highlighter">Why</span> choose us?
            </h1>
            <div class="row">
              <div class="reason-col">
                <h2>Reason 1</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                </p>
              </div>
              <div class="reason-col">
                <h2>Reason 2</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                </p>
              </div>
              <div class="reason-col">
                <h2>Reason 3</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae quis expedita eaque dolor. Et quae officiis sunt autem
                  iure unde delectus voluptates, iste voluptatem asperiores.
                  Numquam similique vel in tempore veritatis iusto aspernatur
                  repellat. Perspiciatis pariatur commodi consequatur quas.
                  Possimus.
                </p>
              </div>
            </div>
          </section>

          <section class="places">
            <h1 class="subtitle">
              Popular <span class="word-highlighter">places</span>
            </h1>
            <div class="card-places">
              <travel-card></travel-card>
            </div>
          </section>
        </main>
      </div>
    `;
  }
}

customElements.define('home-page', HomePage);
