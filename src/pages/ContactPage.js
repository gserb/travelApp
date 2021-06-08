import { LitElement, html, css } from 'lit-element';
import '../components/lionForm';
import '../components/lionButton';
import '../components/formInput';
import { ajax } from '@lion/ajax';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required, MinMaxLength, IsString } from '@lion/form-core';

export class ContactPage extends LitElement {
  static get styles() {
    return css`
      .contact-page {
        display: block;
      }

      .content {
        text-align: center;
        max-width: 800px;
        margin: 8vh auto;
      }

      h1 {
        margin: 10vh 0;
        text-align: center;
      }

      h2 {
        font-size: 36px;
      }

      h3 {
        color: var(--yellow-100);
      }

      .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 'contactInfo contactForm ';
        margin-top: 30px;
        width: 100%;
        text-align: start;
      }

      .contactInfo {
        grid-area: contactInfo;
        justify-self: start;
        align-self: center;
      }

      .contactInfo .box {
        display: flex;
        padding-top: 30px;
      }

      .contactInfo .box:first-child {
        padding-top: 0;
      }

      .contactInfo .icon {
        margin: 20px 20px 0 0;
      }

      .contactInfo .icon img {
        width: 20px;
      }

      .contactForm {
        color: var(--light);
        grid-area: contactForm;
        margin: 10% auto;
        padding: 40px;
        background: var(--blue);
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
      }

      .contactForm label {
        display: block;
        padding: 20px 0 8px;
        color: #fff;
        text-shadow: 1px 1px 1px #666;
      }

      .contactForm input {
        height: 18px;
        padding: 20px;
        box-sizing: border-box;
        border-radius: 6px;
        box-shadow: 0 0 10px #444;
        border: 1px solid #fff;
      }

      .contactForm form-button {
        display: block;
        width: 50%;
        margin: 40px auto 0;
        font-size: 17px;
        line-height: 30px;
        color: #ffffff;
        padding: 10px 10px;
        font-weight: 600;
        letter-spacing: 0.02em;
        background-color: var(--yellow-100);
        border-radius: 2px;
        cursor: pointer;
      }

      .contactForm form-button:hover {
        background-color: rgba(1, 1, 1, 0.5);
      }

      .contactForm input[type='text']:hover {
        border: 1px solid #fff;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.25) inset,
          0 0 5px rgba(255, 255, 255, 0.4);
      }

      @media screen and (max-width: 768px) {
        .container {
          grid-template-areas: 'contactInfo' 'contactForm';
          grid-template-columns: 1fr;
        }

        .contactInfo {
          margin: 0 30px;
        }
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    loadDefaultFeedbackMessages();
  }

  render() {
    return html`
      <section class="contact-page">
        <div class="content">
          <h1>CONTACT US</h1>
          <p>
            Elitr sit consetetur est invidunt aliquyam invidunt et amet et.
            Voluptua sadipscing sit takimata et ea aliquyam diam ipsum, sanctus
            tempor sanctus nonumy rebum accusam. Aliquyam at et eirmod dolor et
            amet. Ut sit magna justo invidunt invidunt ut amet. Sit magna clita
            eirmod sea et. Nonumy dolores.
          </p>
          <div class="container">
            <div class="contactInfo">
              <div class="box">
                <div class="icon">
                  <img
                    src="https://image.flaticon.com/icons/png/512/484/484167.png"
                    alt="Map icon"
                  />
                </div>
                <div class="text">
                  <h3>Address</h3>
                  <p>
                    0210 Travel Road, <br />
                    Owatonna, Minnesota, <br />55060
                  </p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <img
                    src="https://image.flaticon.com/icons/png/512/597/597177.png"
                    alt="Phone icon"
                  />
                </div>
                <div class="text">
                  <h3>Phone</h3>
                  <p>507-475-6094</p>
                </div>
              </div>
              <div class="box">
                <div class="icon">
                  <img
                    src="https://image.flaticon.com/icons/png/512/725/725643.png"
                    alt="Email icon"
                  />
                </div>
                <div class="text">
                  <h3>Email</h3>
                  <p>travel.theworld@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="contactForm">
              <h2>Send message:</h2>
              <form>
                <form-input
                  name="name"
                  placeholder="Your Name"
                  label="Full Name"
                  .validators=${[new Required(), new IsString()]}
                ></form-input>
                <form-input
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                ></form-input>
                <form-input
                  name="message"
                  placeholder="Type the message here..."
                  label="Message"
                  .validators=${[
                    new Required(),
                    new MinMaxLength({
                      min: 10,
                      max: 100,
                    }),
                  ]}
                ></form-input>
                <form-button type="submit">Send</form-button>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('contact-page', ContactPage);
