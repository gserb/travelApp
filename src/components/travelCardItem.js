import { LitElement, html, css } from 'lit-element';

class TravelCardItem extends LitElement {
  static get properties() {
    return {
      destination: { type: Object },
    };
  }

  static get styles() {
    return css`
      .card {
        position: relative;
        max-width: 280px;
        height: 400px;
        background: var(--light);
        margin: 30px 15px;
        padding: 5px 0px;
        display: flex;
        align-items: flex-end;
        transition: 0.5s ease-in-out;
      }

      .card:hover {
        transform: translateY(20px);
      }

      .card:hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.8)
        );
        transition: 0.5s all;
        z-index: 2;
      }

      .card .card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
      }
      .card .card-text {
        display: relative;
        padding: 10px 15px;
        text-align: left;
        color: var(--light);
        visibility: hidden;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s all;
      }

      .card:hover .card-text {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.3s;
        z-index: 3;
      }

      .btn {
        font-size: 16px;
        color: #ffffff;
        padding: 8px 16px;
        font-weight: 500;
        letter-spacing: 0.02em;
        background-color: var(--yellow-100);
        border-radius: 2px;
        border-color: white;
        cursor: pointer;
      }

      .btn:hover {
        background-color: var(--blue);
      }

      .card .card-text a {
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <div class="card-img">
          <img
            src="${this.destination.imageUrl}"
            alt="${this.destination.name}"
          />
        </div>
        <div class="card-text">
          <h1>${this.destination.name}</h1>
          <p>${this.destination.description}</p>
          <a href="/place" class="btn">Book now</a>
        </div>
      </div>
    `;
  }
}

customElements.define('travel-card-item', TravelCardItem);
