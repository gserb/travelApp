import { LitElement, html } from 'lit-element';

class ToDoListItem extends LitElement {
  static get properties() {
    return {
      todoItems: { type: Object },
    };
  }
  render() {
    return html` ${this.todoItems.text} `;
  }
}

customElements.define('todo-list-item', ToDoListItem);
