// import { LitElement, html, css } from '@lion/core';
// import '../MyComponents/navBar/navBar';
// import '../MyComponents/footer/footer';

// class TravelCardId extends LitElement {
//   static get properties() {
//     return {
//       destinationId: {
//         type: String,
//       },
//       _isLoading: {
//         type: Boolean,
//       },
//     };
//   }
//   oneBeforeEnter(location) {
//     if (location?.params?.place) {
//       this.destinationId = location.params.place;
//     }
//   }

//   render() {
//     return html`
//       <navbar-component></navbar-component>
//       <a href="/places-to-travel/D1">D1</a>
//       <a href="/places-to-travel/D2">D2</a>
//       <a href="/places-to-travel/D3">D3</a>
//       <footer-component></footer-component>
//       ${this.destinationId
//         ? html`<h2>Destination Id: ${this.destinationId}</h2>`
//         : ''}
//     `;
//   }
// }

// customElements.define('travel-card-id', TravelCardId);
