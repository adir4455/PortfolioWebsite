import React from "react";
import TypeWriter from "../../js/TypeWriter";
import AElogo from "../../img/AElogo.png";

function HomeNavBar() {
  return (
    <>
      <header id="header-home">
        <div class="container">
          <nav id="main-nav">
            <img src={AElogo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <a href="/" class="current">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work">Work</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
              View My Work
            </a>
          </div>

          <TypeWriter />
        </div>
      </header>
    </>
  );
}

export default HomeNavBar;
