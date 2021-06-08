import { LitElement, html, css } from 'lit-element';

export class FooterComponent extends LitElement {
  static get styles() {
    return css`
      * {
        font-weight: 400;
      }

      .footer {
        min-height: 36vh;
        color: var(--light);
        display: grid;
        grid-template-areas: 'newsletter quick-links' 'credits social-links';
        margin: 0 10%;
        align-items: flex-end;
        column-gap: 40px;
        padding-bottom: 10vh;
      }

      h4 {
        color: #fff;
        font-size: 24px;
        text-transform: uppercase;
        margin-top: 5px;
        letter-spacing: 2px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      ul li a {
        text-decoration: none;
        color: var(--light);
      }

      .footer .newsletter {
        grid-area: newsletter;
      }

      .footer .quickLinks {
        grid-area: quick-links;
        justify-self: end;
        text-align: end;
      }

      .footer .quickLinks ul li a:hover {
        color: var(--yellow-100);
      }

      .footer .line {
        grid-area: 2/1/3/3;
        width: 100%;
        align-self: center;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      }

      .footer .credits {
        grid-area: credits;
      }

      .footer .socialLinks {
        grid-area: social-links;
        justify-self: end;
      }

      .footer .socialLinks img {
        width: 20px;
      }

      .footer .socialLinks ul {
        display: flex;
        margin: 0;
        padding: 0;
      }

      .footer .socialLinks ul li {
        padding: 0 10px;
      }

      .footer .newsletter input {
        border: none;
        border-bottom: 1px var(--light) solid;
        font-size: 16px;
        background: none;
      }

      input:focus {
        outline: none;
      }

      ::placeholder {
        color: var(--light);
      }

      .button {
        background: var(--blue);
        color: var(--light);
        margin-left: 2vh;
        padding: 4px 12px;
        font-size: 20px;
      }

      .button:hover {
        cursor: pointer;
        background-color: var(--light);
        box-shadow: black;
        color: var(--blue);
      }

      @media screen and (max-width: 768px) {
        .footer {
          grid-template-areas: 'newsletter' 'quick-links' 'credits' 'social-links';
          align-items: center;
          row-gap: 8vh;
          padding-top: 10vh;
        }

        .footer .newsletter {
          justify-self: start;
        }

        .footer .quickLinks {
          justify-self: start;
          text-align: start;
        }

        .footer .line {
          grid-area: 3/1/4/1;
          align-self: start;
          margin-bottom: 10vh;
        }

        .footer .socialLinks {
          justify-self: center;
          align-self: center;
        }

        .footer .socialLinks li:first-child {
          padding-left: 0;
        }

        .footer .credits {
          align-self: end;
          justify-self: center;
          text-align: center;
        }
      }
    `;
  }

  render() {
    return html`
      <footer class="footer">
        <div class="newsletter">
          <h4>Newsletter Sign up</h4>
          <p>Subscribe to our newsletter to get the best deals anywhere.</p>
          <form id="form">
            <input type="email" placeholder="Your Email Address" required="required" ></input>
            <button type="submit" class="button">→</button>
          </form>
        </div>
        <div class="quickLinks">
          <h4>
            Quick Links
          </h4>
          <ul class="links">
            <li><a href="#about_us">About us</a></li>
            <li><a href="/contact">Contact us</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <hr class="line">
        <div class="credits">© 2021 DevSchool ING ⋅ All Rights Reserved</div>
        <div class="socialLinks">
          <ul class="social-media-icons">
            <li>
              <a target="_blank" alt="facebook" href="https://www.facebook.com">
                <img alt="Facebook redirect link" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+" />
              </a>
            </li>
            <li>
              <a target="_blank" alt="twitter" href="https://twitter.com">
                <img alt="Twitter redirect link" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMi4wMDAwNCA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTUxMiA1NS45NjQ4NDRjLTMyLjIwNzAzMSAxLjQ4NDM3NS0zMS41MDM5MDYgMS4zNjMyODEtMzUuMTQ0NTMxIDEuNjY3OTY4bDE5LjA3NDIxOS01NC40NzI2NTZzLTU5LjUzOTA2MyAyMS45MDIzNDQtNzQuNjMyODEzIDI1LjgyMDMxM2MtMzkuNjQwNjI1LTM1LjYyODkwNy05OC41NjI1LTM3LjIwMzEyNS0xNDAuNjg3NS0xMS4zMTI1LTM0LjQ5NjA5NCAyMS4yMDcwMzEtNTMuMDExNzE5IDU3LjYyNS00Ni44MzU5MzcgMTAwLjE5MTQwNi02Ny4xMzY3MTktOS4zMTY0MDYtMTIzLjcwMzEyNi00MS4xNDA2MjUtMTY4LjM2MzI4Mi05NC43ODkwNjNsLTE0LjEyNS0xNi45NjQ4NDMtMTAuNTU0Njg3IDE5LjM4MjgxMmMtMTMuMzM5ODQ0IDI0LjQ5MjE4OC0xNy43Njk1MzEgNTIuNDk2MDk0LTEyLjQ3NjU2MyA3OC44NTE1NjMgMi4xNzE4NzUgMTAuODEyNSA1Ljg2MzI4MiAyMS4xMjUgMTAuOTc2NTYzIDMwLjc4MTI1bC0xMi4xMTcxODgtNC42OTUzMTMtMS40Mzc1IDIwLjI0NjA5NGMtMS40NTcwMzEgMjAuNTY2NDA2IDUuMzkwNjI1IDQ0LjU3NDIxOSAxOC4zMjAzMTMgNjQuMjE0ODQ0IDMuNjQwNjI1IDUuNTMxMjUgOC4zMjgxMjUgMTEuNjA1NDY5IDE0LjI2OTUzMSAxNy41OTc2NTZsLTYuMjYxNzE5LS45NjA5MzcgNy42NDA2MjUgMjMuMTk5MjE4YzEwLjA0Mjk2OSAzMC40ODA0NjkgMzAuOTAyMzQ0IDU0LjA2MjUgNTcuOTcyNjU3IDY3LjE3MTg3NS0yNy4wMzUxNTcgMTEuNDcyNjU3LTQ4Ljg3NSAxOC43OTI5NjktODQuNzczNDM4IDMwLjYwMTU2M2wtMzIuODQzNzUgMTAuNzk2ODc1IDMwLjMzNTkzOCAxNi41ODU5MzdjMTEuNTY2NDA2IDYuMzI0MjE5IDUyLjQzNzUgMjcuNDQ1MzEzIDkyLjgyMDMxMiAzMy43ODEyNSA4OS43NjU2MjUgMTQuMDc4MTI1IDE5MC44MzIwMzEgMi42MTMyODIgMjU4Ljg3MTA5NC01OC42NjQwNjIgNTcuMzA4NTk0LTUxLjYxMzI4MiA3Ni4xMTMyODEtMTI1LjAzMTI1IDcyLjIwNzAzMS0yMDEuNDMzNTk0LS41ODk4NDQtMTEuNTY2NDA2IDIuNTc4MTI1LTIyLjYwNTQ2OSA4LjkyMTg3NS0zMS4wNzgxMjUgMTIuNzA3MDMxLTE2Ljk2NDg0NCA0OC43NjU2MjUtNjYuNDA2MjUgNDguODQzNzUtNjYuNTE5NTMxem0tNzIuODMyMDMxIDQ4LjU1MDc4MWMtMTAuNTM1MTU3IDE0LjA2NjQwNi0xNS44MTI1IDMyLjAzMTI1LTE0Ljg2NzE4OCA1MC41NzgxMjUgMy45NDE0MDcgNzcuMDY2NDA2LTE3LjAyNzM0MyAxMzYuODMyMDMxLTYyLjMyODEyNSAxNzcuNjI4OTA2LTUyLjkxNzk2OCA0Ny42NjAxNTYtMTM4LjI3MzQzNyA2Ni4zNjcxODgtMjM0LjE3MTg3NSA1MS4zMjQyMTktMTcuMzY3MTg3LTIuNzIyNjU2LTM1LjMxNjQwNi04LjgyMDMxMy01MC4xNzE4NzUtMTQuOTEwMTU2IDMwLjA5NzY1Ni0xMC4zNTU0NjkgNTMuMzM5ODQ0LTE5LjU4NTkzOCA5MC44NzUtMzcuMzUxNTYzbDUyLjM5ODQzOC0yNC44MDA3ODEtNTcuODUxNTYzLTMuNzAzMTI1Yy0yNy43MTA5MzctMS43NzM0MzgtNTAuNzg1MTU2LTE1LjIwMzEyNS02NC45Njg3NS0zNy4wMDc4MTIgNy41MzEyNS0uNDM3NSAxNC43OTI5NjktMS42NTYyNSAyMi4wMjM0MzgtMy42NzE4NzZsNTUuMTc1NzgxLTE1LjM2NzE4Ny01NS42MzY3MTktMTMuNjI1Yy0yNy4wMzUxNTYtNi42MjEwOTQtNDIuNDQ1MzEyLTIyLjc5Njg3NS01MC42MTMyODEtMzUuMjAzMTI1LTUuMzYzMjgxLTguMTUyMzQ0LTguODY3MTg4LTE2LjUwMzkwNi0xMC45Njg3NS0yNC4yMDMxMjUgNS41NzgxMjUgMS40OTYwOTQgMTIuMDgyMDMxIDIuNTYyNSAyMi41NzAzMTIgMy42MDE1NjNsNTEuNDk2MDk0IDUuMDkzNzUtNDAuODAwNzgxLTMxLjgyODEyNmMtMjkuMzk4NDM3LTIyLjkyOTY4Ny00MS4xNzk2ODctNTcuMzc4OTA2LTMyLjU0Mjk2OS05MC40OTYwOTMgOTEuNzUgOTUuMTY0MDYyIDE5OS40NzY1NjMgODguMDExNzE5IDIxMC4zMjAzMTMgOTAuNTI3MzQzLTIuMzg2NzE5LTIzLjE4MzU5My0yLjQ0OTIxOS0yMy4yMzgyODEtMy4wNzQyMTktMjUuNDQ1MzEyLTEzLjg4NjcxOS00OS4wODk4NDQgMTYuNTQ2ODc1LTc0LjAxNTYyNSAzMC4yNzM0MzgtODIuNDUzMTI1IDI4LjY3MTg3NC0xNy42MjEwOTQgNzQuMTgzNTkzLTIwLjI3NzM0NCAxMDUuNzA3MDMxIDguNzUzOTA2IDYuODA4NTkzIDYuMjY1NjI1IDE2LjAxNTYyNSA4LjczMDQ2OSAyNC42MzI4MTIgNi41ODk4NDQgNy43MzQzNzUtMS45MjE4NzUgMTQuMDgyMDMxLTMuOTU3MDMxIDIwLjI5Njg3NS02LjE3MTg3NWwtMTIuOTM3NSAzNi45NDUzMTIgMTYuNTE1NjI1LjAxMTcxOWMtMy4xMTcxODcgNC4xNzk2ODgtNi44NTU0NjkgOS4xODM1OTQtMTEuMzUxNTYyIDE1LjE4MzU5NHptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
              </a>
            </li>
            <li>
              <a target="_blank" alt="instagram" href="https://www.instagram.com/">
                <img alt="Instagram redirect link" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTEwLjk0OTIxOSAxNTAuNWMtMS4xOTkyMTktMjcuMTk5MjE5LTUuNTk3NjU3LTQ1Ljg5ODQzOC0xMS44OTg0MzgtNjIuMTAxNTYyLTYuNS0xNy4xOTkyMTktMTYuNS0zMi41OTc2NTctMjkuNjAxNTYyLTQ1LjM5ODQzOC0xMi44MDA3ODEtMTMtMjguMzAwNzgxLTIzLjEwMTU2Mi00NS4zMDA3ODEtMjkuNS0xNi4yOTY4NzYtNi4zMDA3ODEtMzQuODk4NDM4LTEwLjY5OTIxOS02Mi4wOTc2NTctMTEuODk4NDM4LTI3LjQwMjM0My0xLjMwMDc4MS0zNi4xMDE1NjItMS42MDE1NjItMTA1LjYwMTU2Mi0xLjYwMTU2MnMtNzguMTk5MjE5LjMwMDc4MS0xMDUuNSAxLjVjLTI3LjE5OTIxOSAxLjE5OTIxOS00NS44OTg0MzggNS42MDE1NjItNjIuMDk3NjU3IDExLjg5ODQzOC0xNy4yMDMxMjQgNi41LTMyLjYwMTU2MiAxNi41LTQ1LjQwMjM0MyAyOS42MDE1NjItMTMgMTIuODAwNzgxLTIzLjA5NzY1NyAyOC4zMDA3ODEtMjkuNSA0NS4zMDA3ODEtNi4zMDA3ODEgMTYuMzAwNzgxLTEwLjY5OTIxOSAzNC44OTg0MzgtMTEuODk4NDM4IDYyLjA5NzY1Ny0xLjMwMDc4MSAyNy40MDIzNDMtMS42MDE1NjIgMzYuMTAxNTYyLTEuNjAxNTYyIDEwNS42MDE1NjJzLjMwMDc4MSA3OC4xOTkyMTkgMS41IDEwNS41YzEuMTk5MjE5IDI3LjE5OTIxOSA1LjYwMTU2MiA0NS44OTg0MzggMTEuOTAyMzQzIDYyLjEwMTU2MiA2LjUgMTcuMTk5MjE5IDE2LjU5NzY1NyAzMi41OTc2NTcgMjkuNTk3NjU3IDQ1LjM5ODQzOCAxMi44MDA3ODEgMTMgMjguMzAwNzgxIDIzLjEwMTU2MiA0NS4zMDA3ODEgMjkuNSAxNi4zMDA3ODEgNi4zMDA3ODEgMzQuODk4NDM4IDEwLjY5OTIxOSA2Mi4xMDE1NjIgMTEuODk4NDM4IDI3LjI5Njg3NiAxLjIwMzEyNCAzNiAxLjUgMTA1LjUgMS41czc4LjE5OTIxOS0uMjk2ODc2IDEwNS41LTEuNWMyNy4xOTkyMTktMS4xOTkyMTkgNDUuODk4NDM4LTUuNTk3NjU3IDYyLjA5NzY1Ny0xMS44OTg0MzggMzQuNDAyMzQzLTEzLjMwMDc4MSA2MS42MDE1NjItNDAuNSA3NC45MDIzNDMtNzQuODk4NDM4IDYuMjk2ODc2LTE2LjMwMDc4MSAxMC42OTkyMTktMzQuOTAyMzQzIDExLjg5ODQzOC02Mi4xMDE1NjIgMS4xOTkyMTktMjcuMzAwNzgxIDEuNS0zNiAxLjUtMTA1LjVzLS4xMDE1NjItNzguMTk5MjE5LTEuMzAwNzgxLTEwNS41em0tNDYuMDk3NjU3IDIwOWMtMS4xMDE1NjIgMjUtNS4zMDA3ODEgMzguNS04LjgwMDc4MSA0Ny41LTguNjAxNTYyIDIyLjMwMDc4MS0yNi4zMDA3ODEgNDAtNDguNjAxNTYyIDQ4LjYwMTU2Mi05IDMuNS0yMi41OTc2NTcgNy42OTkyMTktNDcuNSA4Ljc5Njg3Ni0yNyAxLjIwMzEyNC0zNS4wOTc2NTcgMS41LTEwMy4zOTg0MzggMS41cy03Ni41LS4yOTY4NzYtMTAzLjQwMjM0My0xLjVjLTI1LTEuMDk3NjU3LTM4LjUtNS4yOTY4NzYtNDcuNS04Ljc5Njg3Ni0xMS4wOTc2NTctNC4xMDE1NjItMjEuMTk5MjE5LTEwLjYwMTU2Mi0yOS4zOTg0MzgtMTkuMTAxNTYyLTguNS04LjMwMDc4MS0xNS0xOC4zMDA3ODEtMTkuMTAxNTYyLTI5LjM5ODQzOC0zLjUtOS03LjY5OTIxOS0yMi42MDE1NjItOC43OTY4NzYtNDcuNS0xLjIwMzEyNC0yNy0xLjUtMzUuMTAxNTYyLTEuNS0xMDMuNDAyMzQzcy4yOTY4NzYtNzYuNSAxLjUtMTAzLjM5ODQzOGMxLjA5NzY1Ny0yNSA1LjI5Njg3Ni0zOC41IDguNzk2ODc2LTQ3LjUgNC4xMDE1NjItMTEuMTAxNTYyIDEwLjYwMTU2Mi0yMS4xOTkyMTkgMTkuMjAzMTI0LTI5LjQwMjM0MyA4LjI5Njg3Ni04LjUgMTguMjk2ODc2LTE1IDI5LjM5ODQzOC0xOS4wOTc2NTcgOS0zLjUgMjIuNjAxNTYyLTcuNjk5MjE5IDQ3LjUtOC44MDA3ODEgMjctMS4xOTkyMTkgMzUuMTAxNTYyLTEuNSAxMDMuMzk4NDM4LTEuNSA2OC40MDIzNDMgMCA3Ni41LjMwMDc4MSAxMDMuNDAyMzQzIDEuNSAyNSAxLjEwMTU2MiAzOC41IDUuMzAwNzgxIDQ3LjUgOC44MDA3ODEgMTEuMDk3NjU3IDQuMDk3NjU3IDIxLjE5OTIxOSAxMC41OTc2NTcgMjkuMzk4NDM4IDE5LjA5NzY1NyA4LjUgOC4zMDA3ODEgMTUgMTguMzAwNzgxIDE5LjEwMTU2MiAyOS40MDIzNDMgMy41IDkgNy42OTkyMTkgMjIuNTk3NjU3IDguODAwNzgxIDQ3LjUgMS4xOTkyMTkgMjcgMS41IDM1LjA5NzY1NyAxLjUgMTAzLjM5ODQzOHMtLjMwMDc4MSA3Ni4zMDA3ODEtMS41IDEwMy4zMDA3ODF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NDkyMTkgMTI0LjVjLTcyLjU5NzY1NyAwLTEzMS41IDU4Ljg5ODQzOC0xMzEuNSAxMzEuNXM1OC45MDIzNDMgMTMxLjUgMTMxLjUgMTMxLjVjNzIuNjAxNTYyIDAgMTMxLjUtNTguODk4NDM4IDEzMS41LTEzMS41cy01OC44OTg0MzgtMTMxLjUtMTMxLjUtMTMxLjV6bTAgMjE2LjgwMDc4MWMtNDcuMDk3NjU3IDAtODUuMzAwNzgxLTM4LjE5OTIxOS04NS4zMDA3ODEtODUuMzAwNzgxczM4LjIwMzEyNC04NS4zMDA3ODEgODUuMzAwNzgxLTg1LjMwMDc4MWM0Ny4xMDE1NjIgMCA4NS4zMDA3ODEgMzguMTk5MjE5IDg1LjMwMDc4MSA4NS4zMDA3ODFzLTM4LjE5OTIxOSA4NS4zMDA3ODEtODUuMzAwNzgxIDg1LjMwMDc4MXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDIzLjg1MTU2MiAxMTkuMzAwNzgxYzAgMTYuOTUzMTI1LTEzLjc0NjA5MyAzMC42OTkyMTktMzAuNzAzMTI0IDMwLjY5OTIxOS0xNi45NTMxMjYgMC0zMC42OTkyMTktMTMuNzQ2MDk0LTMwLjY5OTIxOS0zMC42OTkyMTkgMC0xNi45NTcwMzEgMTMuNzQ2MDkzLTMwLjY5OTIxOSAzMC42OTkyMTktMzAuNjk5MjE5IDE2Ljk1NzAzMSAwIDMwLjcwMzEyNCAxMy43NDIxODggMzAuNzAzMTI0IDMwLjY5OTIxOXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
              </a>
            </li>
          </ul>
        </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
