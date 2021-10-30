import React from "react";
import AElogo from "../../img/AElogo.png";

function AboutNavBar() {
  return (
    <>
      <header id="header-inner">
        <div class="container">
          <nav id="main-nav">
            <img src={AElogo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/work" class="current">
                  Work
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default AboutNavBar;
