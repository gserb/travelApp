import { LitElement, html } from 'lit-element';
import './todoListItem.js';

class TodoList extends LitElement {
  static get properties() {
    return {
      _todos: { type: Array },
    };
  }

  constructor() {
    super();
    this._todos = [
      { text: 'lorem ipsum', done: false },
      { text: 'dolor sit', done: true },
      { text: 'amet', done: false },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Connected');
  }

  render() {
    return html`
      <h1>TODO list</h1>
      <ul>
        ${this._todos.map(
          item =>
            html`<li><todo-list-item .todoItem=${item}></todo-list-item></li>`
        )}
      </ul>
      <form @submit=${this._handleFormSubmit}>
        <label for="text">Text</label>
        <input type="text" name="text" id="text" />
        <button type="submit">Add</button>
      </form>
    `;
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    // debugger;
    const form = e.target;
    const formData = new FormData(form);
    // let obj = { ...Object.fromEntries(formData), done: false };
    // this._todos = [
    //   ...this._todos,
    //   { ...Object.fromEntries(formData), done: false },
    // ];

    this._todos.push({ ...Object.fromEntries(formData), done: false });
    this.requestUpdate();

    form.reset();
  }
}

customElements.define('todo-list', TodoList);
