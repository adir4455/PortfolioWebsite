import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer id="main-footer">
      <div className="footer-content container">
        <p>Copyright &copy; 2021, All Rights Reserved</p>
        <div className="social">
          <FontAwesomeIcon icon={faTwitter} className="fab fa-twitter" />
          <FontAwesomeIcon icon={faFacebook} className="fab fa-facebook" />
          <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" />
          <FontAwesomeIcon icon={faLinkedinIn} className="fab fa-linkedin" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
