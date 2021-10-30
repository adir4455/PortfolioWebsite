import React from "react";
import TypeWriter from "../../js/TypeWriter";
import AElogo from "../../img/AElogo.png";
import { Link } from "react-router-dom";

function HomeNavBar() {
  return (
    <>
      <header id="header-home">
        <div class="container">
          <nav id="main-nav">
            <img src={AElogo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <Link to="/" class="current">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div class="header-content">
            <h1>
              I Am Adir The
              <span
                class="txt-type"
                data-wait="3000"
                data-words='[" Developer", " Desinger"]'
              ></span>
            </h1>
            <a href="/work" class="btn-light">
              View My Projects
            </a>
          </div>

          <TypeWriter />
        </div>
      </header>
    </>
  );
}

export default HomeNavBar;
