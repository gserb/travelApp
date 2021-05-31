import { LitElement, html, css } from 'lit-element';

export class HeroComponent extends LitElement {
  static get styles() {
    return css`
      .hero {
        background-image: linear-gradient(
            180deg,
            rgba(6, 34, 48, 0.1),
            rgba(6, 34, 48, 0.8)
          ),
          /*url('https://images.unsplash.com/photo-1594294749004-f13f15ed9f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80');
        */
            url('https://images.unsplash.com/photo-1592300254375-9cb152e00e57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2562&q=80');
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
      }

      .hero-text {
        color: var(--light);
        max-width: 1430px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        text-align: center;
        font-family: 'Lato';
        justify-content: space-between;
        height: 100vh;
        padding: 0 30px;
      }

      .hero-text h1 {
        font-size: 50px;
        margin-top: 30vh;
      }

      .hero-image-source {
        font-size: 16px;
        font-weight: 400;
        align-self: flex-end;
        margin: 10px 0;
        color: rgba(255, 255, 255, 0.3);
      }

      .hero-image-source a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.3);
      }

      @media screen and (max-width: 1024px) {
        .hero-text {
        }
      }

      @media screen and (max-width: 768px) {
        .hero-text h1 {
          font-size: 40px;
          margin-top: 15vh;
        }

        .hero-image-source {
          font-size: 10px;
        }
      }
    `;
  }

  render() {
    return html`
      <section class="hero">
        <div class="hero-text">
          <h1>WORLD is wide and LIFE is short</h1>
          <div class="hero-image-source">
            Photo by
            <a href="https://unsplash.com/@timgarifov"
              ><em>Timur Garifov</em></a
            >
            on
            <a href="https://unsplash.com/"><em>Unsplash</em></a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('hero-component', HeroComponent);
