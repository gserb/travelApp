import { LitElement, html, css } from 'lit-element';
import '../javaScripts/mobileNavBar';

export class NavComponent extends LitElement {
  static get styles() {
    return css`

      .nav-bar {
        height: 6vh;
        line-height: 4vh;
        transition: all 0.4s ease;
        display: flex;
        margin: auto 15%;
        justify-content: space-between;
      }

      .nav-bar .nav-list {
        float: right;
        margin: 1vh 0;
      }

      .nav-bar .nav-list ul {
        list-style: none;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
      }

      .nav-bar .nav-list ul li{
        padding-right: 2rem;
      }

      .nav-bar .nav-list ul li:nth-child(5) {
        padding-right: 1rem;
      }

      .nav-bar .nav-list ul li:nth-child(6) {
        padding-right: 0;
      }

      .logo {
        float: left;
        margin: 1vh 0 1vh 0;
        color: var(--primary);
        text-transform: uppercase;
      }

      .logo a:nth-child(2) {
        padding-left: 1rem;
      }

      .nav-bar a {
        color: var(--blue);
        text-decoration: none;
        font-size: 1.5rem;
      }

      .nav-bar .logo a:nth-child(2):hover {
        color: var(--yellow-100);
      }

      .nav-bar .nav-list ul  li:not(:nth-child(5)) :hover{
        color: var(--yellow-100);
      
      }

       .burger {
        display: none;
        margin: 1vh 0px;
        padding: auto 0;
        align-self: center;
        margin: 0.1vh 0;
      }


      button:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }

      @media screen and (max-width: 1024px) {
        
        .logo{
          display: none;
        }

        .nav-bar .nav-list {
          width: 100%;
        }

        .nav-bar .nav-list ul li:nth-child(5) {
          margin-left: auto;
        }

      }

      @media screen and (max-width: 768px) {
        .burger {
          display: block;
        }

        .logo {
          display: block;
        }

        .logo a{
          font-size: 20px;
        }

        
        .nav-bar .nav-list {
          display: none;
        }

        .nav-bar .nav-list.active {
          left: 0:
          width: 100%;
        }

        .nav-bar .nav-list ul {
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100vh;
          margin: 0;
          background-color: var(--dark);
        }

        .nav-bar .nav-list ul li {
          width: 100%;
          text-align: center;
        }

        .nav-bar .nav-list ul li:nth-child(5){
          visibility: hidden;
        }
              
        .burger {
          cursor: pointer;
          width: 30px;
          height: 20px;        
        }

        .burger i {
          background-color: var(--blue);
          border-radius: 4px;
          content: '';
          display: block;
          width: 100%;
          height: 3px;
        }
        
        
        .menu-opened {
            height: 100%;
            background-color: #000;
            transition-delay: 0.25s;
        }
        
        .burger i:nth-child(1) {
          -webkit-animation: outT 0.8s backwards;
          animation: outT 0.8s backwards;
          -webkit-animation-direction: reverse;
          animation-direction: reverse;
        }

        .burger i:nth-child(2) {
          margin: 5px 0;
          -webkit-animation: outM 0.8s backwards;
          animation: outM 0.8s backwards;
          -webkit-animation-direction: reverse;
          animation-direction: reverse;
        }

        .burger i:nth-child(3) {
          -webkit-animation: outBtm 0.8s backwards;
          animation: outBtm 0.8s backwards;
          -webkit-animation-direction: reverse;
          animation-direction: reverse;
        }

        .burger.active i:nth-child(1) {
          -webkit-animation: intT 0.8s forwards;
          animation: inM 0.8s forwards;
        }

        .burger.active i:nth-child(2) {
          -webkit-animation: intM 0.8s forwards;
          animation: inM 0.8s forwards;
        }

        .burger.active i:nth-child(3) {
          -webkit-animation: intBtm 0.8s forwards;
          animation: inBtm 0.8s forwards;
        }

        @-webkit-keyframes inM {
          50% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(45deg);
          }
        }

        @keyframes inM {
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }

        @-webkit-keyframes outM {
          50% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(45deg);
          }
        }

        @keyframes outM {
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(45deg);
          }
        }

        @-webkit-keyframes inT {
          0% {
            -webkit-transform: translateY(0px) rotate(0deg);
          }
          50% {
            -webkit-transform: translateY(9px) rotate(0deg);
          }
          100% {
            -webkit-transform: translateY(9px) rotate(135deg);
          }
        }

        @keyframes inT {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(9px) rotate(0deg);
          }
          100% {
            transform: translateY(9px) rotate(135deg);
          }
        }

        @-webkit-keyframes outT {
          0% {
            -webkit-transform: translateY(0px) rotate(0deg);
          }
          50% {
            -webkit-transform: translateY(9px) rotate(0deg);
          }
          100% {
            -webkit-transform: translateY(9px) rotate(135deg);
          }
        }

        @keyframes outT {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(9px) rotate(0deg);
          }
          100% {
            transform: translateY(9px) rotate(135deg);
          }
        }

        @-webkit-keyframes inBtm {
          0% {
            -webkit-transform: translateY(0px) rotate(0deg);
          }
          50% {
            -webkit-transform: translateY(-9px) rotate(0deg);
          }
          100% {
            -webkit-transform: translateY(-9px) rotate(135deg);
          }
        }

        @keyframes inBtm {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0deg);
          }
          100% {
            transform: translateY(-9px) rotate(135deg);
          }
        }

        @-webkit-keyframes outBtm {
          0% {
            -webkit-transform: translateY(0px) rotate(0deg);
          }
          50% {
            -webkit-transform: translateY(-9px) rotate(0deg);
          }
          100% {
            -webkit-transform: translateY(-9px) rotate(135deg);
          }
        }

        @keyframes outBtm {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0deg);
          }
          100% {
            transform: translateY(-9px) rotate(135deg);
          }
        }

        .affix {
          padding: 0;
          background-color: #111;
        }
      }
    `;
  }

  render() {
    return html`
      <nav class="nav-bar">
        <div class="logo"><a href="/">✈ |</a><a href="/">Travel App</a></div>
        <div class="nav-list">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="/places">Places</a></li>
            <li><a href="/add">Add places</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a>|</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        <span class="burger">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </nav>
    `;
  }
}

customElements.define('nav-component', NavComponent);
