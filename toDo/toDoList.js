import { LitElement, html, css } from 'lit-element';
import './todoListItem.js';

class TodoList extends LitElement {
  static get styles() {
    return css`
      article * {
        padding: 1rem;
        border: 1px solid red;
      }
    `;
  }
  static get properties() {
    return {
      _todos: { type: Array },
    };
  }

  constructor() {
    super();
    this._todos = [
      {
        text: 'lorem ipsum',
        done: true,
      },
      {
        text: 'dolor sit',
        done: false,
      },
      {
        text: 'amet',
        done: true,
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('Connected');
  }

  render() {
    return html`
      <h1>To do list</h1>
      <ul>
        ${this._todos.map((item, index) => {
          console.log(item.done);
          return html`<li>
            <todo-list-item
              .text=${item.text}
              .done=${item.done}
              @updateTodo=${event => this._handleUpdateTodo(index, event)}
            ></todo-list-item>
          </li>`;
        })}
      </ul>
      <form @submit=${this._handleFormSubmit}>
        <label for="text">Text</label>
        <input type="text" name="text" id="text" />
        <button type="submit">Add</button>
      </form>
      <article
        @click=${event => console.log(event.target, event.currentTarget)}
      >
        <div>
          <p>
            <span>Hello!</span>
          </p>
        </div>
      </article>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    // let obj = { ...Object.fromEntries(formData), done: false };
    // this._todos = [
    //   ...this._todos,
    //   { ...Object.fromEntries(formData), done: false },
    // ];
    this._todos = [
      ...this._todos,
      { ...Object.fromEntries(formData), done: false },
    ];

    this.requestUpdate();
    form.reset();
  }

  _handleUpdateTodo(index, event) {
    this._todos = [
      ...this._todos.slice(0, index),
      {
        text: event.detail.text,
        done: this._todos[index].done,
      },
      ...this._todos.slice(index + 1),
    ];
  }
}

customElements.define('todo-list', TodoList);
