import React from "react";
import AElogo from "../../img/AElogo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

function AboutNavBar() {
  const { reloadPage } = useGlobalContext();
  return (
    <>
      <header id="header-inner">
        <div class="container">
          <nav id="main-nav">
            <img src={AElogo} alt="My Portfolio" id="logo" />
            <ul>
              <li>
                <Link to="/" onClick={reloadPage}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work">Projects</Link>
              </li>
              <li>
                <Link to="/contact" class="current">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default AboutNavBar;
