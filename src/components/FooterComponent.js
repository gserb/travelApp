import { LitElement, html, css } from 'lit-element';

export class FooterComponent extends LitElement {
  static get styles() {
    return css`
      footer {
      }

      .footer {
        display: grid;
        grid-gap: 50px;
        grid-template-columns: 1.5fr 1fr;
        grid-template-rows: 70% 15%;
        grid-template-areas:
          'title register'
          'credits social';
        align-items: stretch;
        justify-items: stretch;
        margin: 0 10%;
        padding: 20px 0 30px;
      }

      .footer .newsletter-title {
        grid-area: title;
        font-size: 32px;
        color: var(--light);
        align-self: center;
      }
      .footer .newsletter-title .newsletter-text {
        font-size: 16px;
      }

      .footer .newsletter-form {
        grid-area: register;
        align-self: flex-end;
        margin-bottom: 40px;
        justify-self: flex-end;
      }

      .footer .newsletter-form .newsletter-form-input {
        border: none;
        border-bottom: 2px var(--light) solid;
        font-size: 16px;
        background: none;
      }

      ::placeholder {
        color: var(--light);
      }

      .footer .credits {
        grid-area: credits;
        color: var(--light);
        align-self: center;
        justify-self: flex-start;
      }

      .footer .social {
        color: var(--light);
        grid-area: social;
        align-self: center;
        justify-self: flex-end;
      }
      .footer .social ul {
        margin: 0;
      }

      button {
        background: var(--light);
        border-color: var(--light);
        border-width: 2px;
        color: var(--light);
        background: var(--blue);
        transition: all 0.3s ease 0s;
        font-size: 30px;
        padding: 0 10px;
        margin-left: 30px;
      }

      @media screen and (max-width: 1024px) {
        .footer #newsletterForm {
          display: flex;
        }
      }

      @media screen and (max-width: 768px) {
        .footer {
          display: flex;
          flex-direction: column;
          text-align: center;
          margin: auto;
        }
        .footer .newsletter-title {
          display: block;
          font-size: 24px;
          padding: 8% 8% 0;
        }
        .footer .newsletter-title .newsletter-text,
        .footer .newsletter-form .newsletter-form-input {
          font-size: 18px;
          font-weight: normal;
        }
        .newsletter-button {
          font-size: 18px;
        }
        .footer .newsletter-form {
          margin: auto;
        }
        .footer .credits,
        .footer .social {
          font-size: 16px;
        }
      }
    `;
  }

  render() {
    return html`
      <section class="footer">
        <h2 class="newsletter-title">
          Newsletter Sign up
          <div class="newsletter-text">
            Subscribe to our newsletter to get the best deals anywhere
          </div>
        </h2>
        <div class="newsletter-form">
          <form id="newsletterForm">
            <input
              type="text"
              class="newsletter-form-input"
              placeholder="Your Email Address"
              required="required"
            />
            <button class="newsletter-button">→</button>
          </form>
        </div>
        <div class="credits">© 2021 DevSchool ING ⋅ All Rights Reserved</div>
        <div class="social">
          <ul class="social-media-icons">
            <li class="facebook fa fa-facebook">
              <a target="_blank" alt="facebook" href="#"></a>
            </li>
            <li class="Twitter fa fa-twitter">
              <a target="_blank" alt="twitter" href="#"></a>
            </li>
            <li class="Instagram fa fa-instagram">
              <a target="_blank" alt="instagram" href="#"></a>
            </li>
          </ul>
        </div>
      </section>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
