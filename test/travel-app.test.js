import { html, fixture, expect } from '@open-wc/testing';

import '../src/travel-app.js';

describe('TravelApp', () => {
  let element;
  beforeEach(async () => {
    // arranege
    element = await fixture(html`<travel-app></travel-app>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('DevSchool app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('can compute a custom title', () => {
    // act
    let newTitle = element._getCustomTitle('Hey');
    console.log(newTitle);
    // assert
    expect(newTitle).to.not.be.empty;
    expect(newTitle).to.equal('Your new title is Hey');
  });
});
