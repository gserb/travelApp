import { html, fixture, expect } from '@open-wc/testing';

import '../../src/MyComponents/navBar/navBar';

describe('NavbarComponent', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<navbar-component></navbar-component>`);
  });

  it('renders an ul list with 6 list items', () => {
    const ulList = element.shadowRoot.querySelector('ul');
    expect(ulList).to.exist;
    expect(ulList.children).to.have.lengthOf(6);
  });
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
