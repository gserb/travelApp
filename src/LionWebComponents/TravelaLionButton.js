import { LionButton } from '@lion/button';

class TravelaLionButton extends LionButton {
  static get styles() {
    return super.styles;
  }
}

customElements.define('travela-lion-button', TravelaLionButton);
