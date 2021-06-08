import { html, fixture, expect } from '@open-wc/testing';

import '../src/travel-app';

describe('TravelApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<travel-app></travel-app>`);
  });

  it('renders a navbar-component', () => {
    expect(element.shadowRoot.querySelector('navbar-component')).to.exist;
  });

  it('renders a main element', () => {
    expect(element.shadowRoot.querySelector('main')).to.exist;
  });

  it('renders a footer-component', () => {
    expect(element.shadowRoot.querySelector('footer-component')).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
