import { LitElement, html, css } from 'lit-element';

class Tour extends LitElement {
  render() {
    return html` <div><h1>Salut</h1></div> `;
  }
}
customElements.define('tour-list', Tour);
