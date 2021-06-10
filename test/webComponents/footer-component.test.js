import { html, fixture, expect } from '@open-wc/testing';

import '../../src/MyComponents/footer/footer';

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<footer-component></footer-component>`);
  });
  it('renders the message correctly', async () => {
    const el = await fixture(
      `<div class="getInTouch"><h1>${'Get in Touch'}</h1></div>`
    );
    expect(el).lightDom.to.equal('<h1>Get in Touch</h1>');
  });
  it('can check for an existing css class', async () => {
    const el = await fixture(`<div class="contacts"></div>`);
    expect(el).to.have.class('contacts');
  });
  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
