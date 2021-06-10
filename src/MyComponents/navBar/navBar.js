import { LitElement, html, css } from 'lit-element';

class NavBar extends LitElement {
  static get styles() {
    return css`
      nav {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        width: 100vw;
        justify-content: space-around;
      }
      nav h1 {
        color: white;
        font-size: 3em;
      }
      nav ul {
        display: flex;
        align-items: center;
        margin-top: 2em;
      }
      nav ul li {
        list-style-type: none;
        margin-right: 1em;
        font-size: 1.5em;
        font-weight: 600;
      }
      nav ul li:hover {
        transform: scale(1.3);
        transition: 0.5s;
      }
      nav ul li a:hover {
        color: pink;
      }
      nav ul li a {
        text-decoration: none;
        color: black;
      }
      nav .bookBtn input {
        margin-top: 2em;
        padding: 1em 2em;
        border-radius: 1em;
        font-size: 1.3em;
        border-style: none;
        background-color: #3e4875;
        color: white;
        font-weight: 600;
        cursor: pointer;
      }
      nav .bookBtn input:hover {
        background-color: #d0d3df;
        color: #3e4875;
        transition: 1s;
      }

      .hero {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40vw;
      }
      .hero h1 {
        font-size: 5em;
        text-align: center;
        color: white;
      }
      .hero input {
        padding: 1.7em 3.5em;
        border-radius: 1em;
        border-style: none;
        color: white;
        background-color: #3e4875;
        font-size: large;
        position: relative;
        left: 50%;
        transform: translate(-50%);
        margin-top: 2em;
        cursor: pointer;
      }

      .hero input:hover {
        background-color: white;
        color: #3e4875;
        transition: 1s;
      }
      .parallax {
        background-image: url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        height: 80vh;
        width: 100vw;
      }

      @media screen and (min-width: 1201px) {
        nav {
          width: 80%;
        }
        .hero h1 {
          font-size: 4em;
        }
      }
      @media screen and (min-width: 1025px) and (max-width: 1200px) {
        nav {
          max-width: 900px;
        }
        .hero h1 {
          font-size: 3.5em;
        }
      }
      @media screen and (min-width: 769px) and (max-width: 1024px) {
        nav {
          font-size: 0.7em;
        }
        .hero h1 {
          font-size: 3em;
        }
      }
      @media screen and (min-width: 481px) and (max-width: 768px) {
        nav {
          flex-direction: column;
          margin-top: 5em;
          text-align: center;
        }
        nav ul {
          flex-direction: column;
          margin: -2em;
          width: 100vw;
          overflow-x: hidden;
        }
        nav .bookBtn input {
          margin-left: 0.5em;
        }

        nav ul li {
          margin-left: 1em;
          line-height: 1.5em;
          display: inline-block;
        }
        .hero {
          margin-top: 13em;
        }
        .hero h1 {
          font-size: 2em;
        }
        .hero input {
          margin-top: 0;
        }
      }
      @media screen and (min-width: 320px) and (max-width: 480px) {
        nav {
          flex-direction: column;
          margin-top: 5em;
          text-align: center;
        }
        nav ul {
          flex-direction: column;
          margin: -2em;
          width: 100vw;
          overflow-x: hidden;
        }
        nav ul li {
          line-height: 1.5em;
        }

        .hero {
          margin-top: 13em;
        }
        .hero h1 {
          font-size: 2em;
        }
        .hero input {
          margin-top: 0;
        }
      }
    `;
  }

  static get properties() {
    return {
      _isLoading: { type: Boolean },
    };
  }

  render() {
    if (this._isLoading) {
      return 'Loading...';
    }
    return html` <header>
      <div class="parallax"></div>
      <nav>
        <h1>Travela</h1>
        <ul>
          <li><a href="/" class="active">Home</a></li>
          <li><a href="#">Tour</a></li>
          <li><a href="#">Hotel</a></li>
          <li><a href="/places-to-travel">Places to travel</a></li>
          <li><a href="/add-destination">Add Destination</a></li>
          <li><a href="#contacts">Contact Us</a></li>
        </ul>
        <div class="bookBtn">
          <input type="button" value="Book now" />
        </div>
      </nav>
      <div class="hero">
        <h1>Discover the world with us</h1>
        <input type="button" value="Start Tour" />
      </div>
    </header>`;
  }
}
customElements.define('navbar-component', NavBar);
