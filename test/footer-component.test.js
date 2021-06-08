import { html, expect, fixture } from '@open-wc/testing';
import '../src/components/FooterComponent';

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<footer-component></footer-component>`);
  });

  it('renders a footer element', () => {
    const footerElement = element.shadowRoot.querySelector('footer');
    expect(footerElement).to.exist;
  });

  it('renders a div.newsletter with 3 children', () => {
    const divElement = element.shadowRoot.querySelector('.newsletter');
    expect(divElement).to.exist;
    expect(divElement.children).to.have.lengthOf(3);
  });

  it('renders a form with 2 children', () => {
    const formElement = element.shadowRoot.querySelector('#form');
    expect(formElement).to.exist;
    expect(formElement.children).to.have.lengthOf(2);
  });

  it('renders an input of type email', () => {
    const inputElement = element.shadowRoot.querySelector('input');
    expect(inputElement).to.exist;
    expect(inputElement).to.have.attribute('type', 'email');
  });

  it('renders a button of type submit', () => {
    const buttonElement = element.shadowRoot.querySelector('button');
    expect(buttonElement).to.exist;
    expect(buttonElement).to.have.attribute('type', 'submit');
  });

  it('renders a div.quickLinks with children 2 children', () => {
    const divElement = element.shadowRoot.querySelector('.quickLinks');
    expect(divElement).to.exist;
    expect(divElement.children).to.have.lengthOf(2);
  });

  it('renders an ul.links element with 3 list items', () => {
    const ulElement = element.shadowRoot.querySelector('.links');
    expect(ulElement).to.exist;
    expect(ulElement.children).to.have.lengthOf(3);
  });
});
