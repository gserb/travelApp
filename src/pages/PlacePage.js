import { LitElement, html, css } from 'lit-element';
import '../components/travelCardItem';

export class PlacePage extends LitElement {
  static get properties() {
    return {
      _placeInfo: {
        type: Object,
      },
    };
  }

  static get styles() {
    return css`
      a {
        text-decoration: none;
        color: #fb6362;
      }

      a:hover {
        color: #f98584;
      }

      ul {
        padding: 0;
      }
      li {
        list-style: none;
      }

      .header {
        position: relative;
        height: 50vh;
        width: 100%;
      }

      .text {
        position: absolute;
      }

      .location {
        display: flex;
        max-width: 1000px;
        margin: -1% 15%;
        color: var(--light);
      }
      .text h1 {
        color: var(--light);
        font-size: 60px;
        text-transform: uppercase;
        width: 100vw;
        text-align: center;
        margin: 20vh auto;
      }

      .image .destinationImg {
        position: absolute;
        object-fit: cover;
        background-size: cover;
        width: 100%;
        height: 100%;
      }

      .icon {
        width: 30px;
      }

      .description {
        margin: 10% 30%;
      }

      .form {
        width: fit-content;
        margin: 0 auto 10%;
      }

      .form h3 {
        text-align: center;
        text-transform: uppercase;
        font-size: 20px;
      }

      .input-text {
        border-radius: 2px;
        background-color: #f4f4f4;
        box-shadow: inset 0px 1px 1px 0px rgba(0, 0, 0, 0.25);
        padding-left: 11px;
        position: relative;
        height: 46px;
        line-height: 46px;
        width: 300px;
      }

      .input-text .icon {
        position: absolute;
        right: 8px;
        top: 8px;
      }

      .input-text input {
        border: none;
        background-color: transparent;
        font-family: 'Gotham Light', sans-serif;
        color: #999999;
      }

      .input-text input:focus {
        outline: none;
      }

      button {
        text-transform: uppercase;
        border: none;
        background-color: var(--yellow-100);
        color: #fff;
        margin: 0 auto;
        display: block;
        box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        font-size: 16px;
        width: 300px;
        height: 50px;
        cursor: pointer;
      }

      button:hover {
        background-color: var(--blue);
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this._placeInfo) {
      this._getInfo();
    }
  }

  async _getInfo() {
    const index = window.location.href.indexOf('places/');
    const placeId = window.location.href.substr(index);
    const placeUrl = `https://devschool-2020.firebaseio.com/ana/${placeId}.json`;
    const response = await fetch(placeUrl);
    const data = await response.json();
    this._placeInfo = data;
  }

  render() {
    return html`
      <section class="place-page">
        <div class="header">
          <div class="image">
            <img
              class="destinationImg"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1504&q=80"
            />
          </div>

          <div class="text">
            <h1>Destination Name</h1>
            <div class="location">
              <img
                class="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwwQzE2MS44OTYsMCw4NS4zMzMsNzYuNTYzLDg1LjMzMywxNzAuNjY3YzAsMjguMjUsNy4wNjMsNTYuMjYsMjAuNDksODEuMTA0TDI0Ni42NjcsNTA2LjUgICAgYzEuODc1LDMuMzk2LDUuNDQ4LDUuNSw5LjMzMyw1LjVzNy40NTgtMi4xMDQsOS4zMzMtNS41bDE0MC44OTYtMjU0LjgxM2MxMy4zNzUtMjQuNzYsMjAuNDM4LTUyLjc3MSwyMC40MzgtODEuMDIxICAgIEM0MjYuNjY3LDc2LjU2MywzNTAuMTA0LDAsMjU2LDB6IE0yNTYsMjU2Yy00Ny4wNTIsMC04NS4zMzMtMzguMjgxLTg1LjMzMy04NS4zMzNjMC00Ny4wNTIsMzguMjgxLTg1LjMzMyw4NS4zMzMtODUuMzMzICAgIHM4NS4zMzMsMzguMjgxLDg1LjMzMyw4NS4zMzNDMzQxLjMzMywyMTcuNzE5LDMwMy4wNTIsMjU2LDI1NiwyNTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
              />
              <p>&nbsp;City, Country name</p>
            </div>
          </div>
        </div>

        <div class="description">
          <h2>About <i>place</i></h2>
          <p>
            Dolor ipsum lorem erat sit et consetetur, sed erat rebum voluptua
            nonumy no nonumy sanctus no stet, lorem eos et duo sit consetetur,
            voluptua dolor lorem stet eirmod gubergren voluptua nonumy
            sadipscing. Magna erat nonumy ipsum justo gubergren no duo magna
            consetetur, takimata nonumy est elitr est sanctus sanctus. Voluptua.
          </p>
        </div>

        <form class="form">
          <h3>Search flights</h3>
          <label for="checkin">Check in</label>
          <div class="input-text">
            <input type="datetime" value="9 June, 2020" id="checkin" />
            <img
              class="icon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM2LjQ0NyAzNi40NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwLjIyNCwzLjk0OGgtMS4wOThWMi43NWMwLTEuNTE3LTEuMTk3LTIuNzUtMi42Ny0yLjc1Yy0xLjQ3NCwwLTIuNjcsMS4yMzMtMi42NywyLjc1djEuMTk3aC0yLjc0VjIuNzUgICAgYzAtMS41MTctMS4xOTctMi43NS0yLjY3LTIuNzVjLTEuNDczLDAtMi42NywxLjIzMy0yLjY3LDIuNzV2MS4xOTdoLTIuNzRWMi43NWMwLTEuNTE3LTEuMTk3LTIuNzUtMi42Ny0yLjc1ICAgIGMtMS40NzMsMC0yLjY3LDEuMjMzLTIuNjcsMi43NXYxLjE5N0g2LjIyNGMtMi4zNDMsMC00LjI1LDEuOTA3LTQuMjUsNC4yNXYyNGMwLDIuMzQzLDEuOTA3LDQuMjUsNC4yNSw0LjI1aDI0ICAgIGMyLjM0NCwwLDQuMjUtMS45MDcsNC4yNS00LjI1di0yNEMzNC40NzQsNS44NTUsMzIuNTY3LDMuOTQ4LDMwLjIyNCwzLjk0OHogTTI1LjI4NiwyLjc1YzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjUgICAgYzAuNjQ2LDAsMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNCwxLjI1LTEuMTcsMS4yNWMtMC42NDUsMC0xLjE3LTAuNTYxLTEuMTctMS4yNVYyLjc1eiBNMTcuMjA2LDIuNzUgICAgYzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjVzMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNSwxLjI1LTEuMTcsMS4yNXMtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NXogTTkuMTI1LDIuNzUgICAgYzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjVzMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNSwxLjI1LTEuMTcsMS4yNXMtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NXogICAgIE0zMS45NzQsMzIuMTk4YzAsMC45NjUtMC43ODUsMS43NS0xLjc1LDEuNzVoLTI0Yy0wLjk2NSwwLTEuNzUtMC43ODUtMS43NS0xLjc1di0yMmgyNy41VjMyLjE5OHoiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMTQuNjI2IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODkiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSIxMi44NTciIHk9IjE0LjYyNiIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg5IiBmaWxsPSIjMDIzYzQwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CgkJPHJlY3QgeD0iMTguOTk1IiB5PSIxNC42MjYiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4OSIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMTQuNjI2IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODkiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMjAuMDg0IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODYiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSIxMi44NTciIHk9IjIwLjA4NCIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg2IiBmaWxsPSIjMDIzYzQwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CgkJPHJlY3QgeD0iMTguOTk1IiB5PSIyMC4wODQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMjAuMDg0IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODYiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjEyLjg1NyIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjE4Ljk5NSIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            />
          </div>
          <label for="checkout">Check out</label>
          <div class="input-text">
            <input
              type="datetime"
              value="16 June, 2020"
              id="checkout"
              readonly
            />
            <img
              class="icon"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM2LjQ0NyAzNi40NDciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTMwLjIyNCwzLjk0OGgtMS4wOThWMi43NWMwLTEuNTE3LTEuMTk3LTIuNzUtMi42Ny0yLjc1Yy0xLjQ3NCwwLTIuNjcsMS4yMzMtMi42NywyLjc1djEuMTk3aC0yLjc0VjIuNzUgICAgYzAtMS41MTctMS4xOTctMi43NS0yLjY3LTIuNzVjLTEuNDczLDAtMi42NywxLjIzMy0yLjY3LDIuNzV2MS4xOTdoLTIuNzRWMi43NWMwLTEuNTE3LTEuMTk3LTIuNzUtMi42Ny0yLjc1ICAgIGMtMS40NzMsMC0yLjY3LDEuMjMzLTIuNjcsMi43NXYxLjE5N0g2LjIyNGMtMi4zNDMsMC00LjI1LDEuOTA3LTQuMjUsNC4yNXYyNGMwLDIuMzQzLDEuOTA3LDQuMjUsNC4yNSw0LjI1aDI0ICAgIGMyLjM0NCwwLDQuMjUtMS45MDcsNC4yNS00LjI1di0yNEMzNC40NzQsNS44NTUsMzIuNTY3LDMuOTQ4LDMwLjIyNCwzLjk0OHogTTI1LjI4NiwyLjc1YzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjUgICAgYzAuNjQ2LDAsMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNCwxLjI1LTEuMTcsMS4yNWMtMC42NDUsMC0xLjE3LTAuNTYxLTEuMTctMS4yNVYyLjc1eiBNMTcuMjA2LDIuNzUgICAgYzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjVzMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNSwxLjI1LTEuMTcsMS4yNXMtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NXogTTkuMTI1LDIuNzUgICAgYzAtMC42ODksMC41MjUtMS4yNSwxLjE3LTEuMjVzMS4xNywwLjU2MSwxLjE3LDEuMjV2NC44OTZjMCwwLjY4OS0wLjUyNSwxLjI1LTEuMTcsMS4yNXMtMS4xNy0wLjU2MS0xLjE3LTEuMjVWMi43NXogICAgIE0zMS45NzQsMzIuMTk4YzAsMC45NjUtMC43ODUsMS43NS0xLjc1LDEuNzVoLTI0Yy0wLjk2NSwwLTEuNzUtMC43ODUtMS43NS0xLjc1di0yMmgyNy41VjMyLjE5OHoiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMTQuNjI2IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODkiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSIxMi44NTciIHk9IjE0LjYyNiIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg5IiBmaWxsPSIjMDIzYzQwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CgkJPHJlY3QgeD0iMTguOTk1IiB5PSIxNC42MjYiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4OSIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMTQuNjI2IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODkiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMjAuMDg0IiB3aWR0aD0iNC41OTUiIGhlaWdodD0iNC4wODYiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSIxMi44NTciIHk9IjIwLjA4NCIgd2lkdGg9IjQuNTk2IiBoZWlnaHQ9IjQuMDg2IiBmaWxsPSIjMDIzYzQwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3JlY3Q+CgkJPHJlY3QgeD0iMTguOTk1IiB5PSIyMC4wODQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMjAuMDg0IiB3aWR0aD0iNC41OTYiIGhlaWdodD0iNC4wODYiIGZpbGw9IiMwMjNjNDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcmVjdD4KCQk8cmVjdCB4PSI2LjcyNCIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjEyLjg1NyIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjE4Ljk5NSIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NSIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJCTxyZWN0IHg9IjI1LjEyOCIgeT0iMjUuNTQiIHdpZHRoPSI0LjU5NiIgaGVpZ2h0PSI0LjA4NiIgZmlsbD0iIzAyM2M0MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
            />
          </div>
          <ul class="persons">
            <li>
              <label>Adults</label>
              <div class="input-text">
                <select name="adults">
                  <option value="1">1</option>
                  <option value="2" selected="selected">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div class="icon"></div>
              </div>
            </li>

            <li>
              <label>Children</label>
              <div class="input-text">
                <select name="children">
                  <option value="0">0</option>
                  <option value="1" selected="selected">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <div class="icon"></div>
              </div>
            </li>
          </ul>
          <button class="button" id="search">
            <div class="icon"></div>
            Search
          </button>
        </form>
      </section>
    `;
  }
}

customElements.define('place-page', PlacePage);
