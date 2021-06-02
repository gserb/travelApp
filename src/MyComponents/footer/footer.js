import { LitElement, html, css } from 'lit-element';

class Footer extends LitElement {
  static get styles() {
    return css`
      footer {
        background-color: #8392da;
        color: white;
        width: 100vw;
      }

      footer .getInTouch {
        text-align: center;
        margin-bottom: 5em;
      }
      footer .getInTouch h1 {
        margin-bottom: 0.5em;
        padding-top: 1em;
        font-size: 3em;
        margin-top: 0;
      }
      footer .getInTouch p {
        font-size: 1.2em;
        margin-bottom: 1.7em;
      }
      footer .getInTouch input[type='email'] {
        padding: 3em 0em;
        width: 40%;
        border-radius: 4em;
        position: relative;
        border: none;
      }
      footer .getInTouch input::placeholder {
        font-size: 1.2em;
        font-weight: bold;
        width: 100vw;
        padding-left: 3em;
        position: fixed;
        color: #8d98bd;
      }
      footer .getInTouch input[type='button'] {
        padding: 1.7em 3em;
        border-radius: 3em;
        background-color: #6f85ce;
        color: white;
        font-weight: bold;
        font-size: 1.2em;
        position: absolute;
        right: 30%;
        margin-top: 0.2em;
        border: none;
        cursor: pointer;
      }
      footer .getInTouch input[type='button']:hover {
        background-color: rgba(60, 60, 255, 0.2);
        color: white;
        transition: 1s;
      }

      footer .contacts {
        border-top: 1px solid white;
        padding-top: 2em;
        padding-bottom: 2em;
        display: flex;
        width: 100vw;
        justify-content: space-around;
      }
      footer .contacts ul {
        display: flex;
      }
      footer .contacts ul li {
        list-style-type: none;
        margin-right: 2em;
        font-weight: bold;
        cursor: pointer;
      }
      footer .contacts ul li:hover {
        color: rgb(38, 38, 204);
        transform: scale(1.5);
        transition: 0.5s;
      }
      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        footer .getInTouch input[type='email'] {
          width: 60vw;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        footer .getInTouch input[type='button'] {
          position: relative;
          left: 5%;
          background-color: blue;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        footer .getInTouch {
          font-size: 0.7em;
          justify-content: center;
        }
        footer .getInTouch input[type='email'] {
          display: inline;
          font-size: 0.7em;
        }
        footer .getInTouch input[type='button'] {
          position: relative;
          left: 5%;
          background-color: blue;
        }
        footer .contacts {
          flex-wrap: wrap;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        footer .getInTouch {
          font-size: 0.7em;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        footer .getInTouch input[type='email'] {
          font-size: 0.7em;
          width: 50%;
          margin: 0 auto;
        }
        footer .getInTouch input[type='button'] {
          position: relative;
          left: 0;
          background-color: blue;
          width: 50%;
          margin: 0 auto;
        }
        footer .contacts {
          flex-wrap: wrap;
          font-size: 0.7em;
        }
      }
    `;
  }
  static get properties() {
    return {
      _isLoading: {
        type: Boolean,
      },
    };
  }

  render() {
    if (this._isLoading) {
      return 'Loading...';
    }
    return html` <footer id="contacts">
      <div class="getInTouch">
        <h1>Get in touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quae!
        </p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <input type="button" value="Subscribe" />
      </div>
      <div class="contacts">
        <h3>&#169; 2020 india cafe all rights reserved</h3>
        <ul>
          <li>Home</li>
          <li>Tour</li>
          <li>Hotel</li>
          <li>Places</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>`;
  }
}
customElements.define('footer-component', Footer);
