import React from "react";
import AElogo from "../../img/AElogo.png";
import { Link } from "react-router-dom";

function AboutNavBar() {
  return (
    <>
      <header id="header-inner">
        <div class="container">
          <nav id="main-nav">
            <img src={AElogo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work" class="current">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default AboutNavBar;
