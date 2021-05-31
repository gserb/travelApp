import { LitElement, html } from 'lit-element';

class TodoListItem extends LitElement {
  static get properties() {
    return {
      /*todoItem: { type: Object },*/
      text: {
        type: String,
      },
      done: {
        type: Boolean,
      },
      isEditing: {
        type: Boolean,
      },
    };
  }

  render() {
    return html` ${this.isEditing
      ? html`
          <form @submit=${this._handleSubmitEdit}>
            <input type="text" name="text" value=${this.text} />
          </form>
        `
      : html`
          ${this.text} ${this.done}
          <button @click=${this._handleEditClick}>edit</button>
        `}`;
  }

  _handleEditClick(event) {
    this.isEditing = true;
  }

  _handleSubmitEdit(event) {
    event.preventDefault();
    const form = event.target;
    const formdata = new FormData(form);
    console.log(Object.fromEntries(formdata).text);
    let updateEvent = new CustomEvent('updateTodo', {
      detail: Object.fromEntries(formdata),
    });
    this.dispatchEvent(updateEvent);
    this.isEditing = false;
  }
}

customElements.define('todo-list-item', TodoListItem);
