import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <section id="contact-b" className="py-3 bg-dark">
      <div className="container">
        <div className="contact-info">
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="fas fa-envelope fa-2x"
            />
            <h3>Email</h3>
            <p>john@smoething.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} className="fas fa-phone fa-2x" />
            <i className="fas fa-phone fa-2x"></i>
            <h3>Phone</h3>
            <p>(555) 555-5555</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faAddressCard}
              className="fas fa-address-card fa-2x"
            />
            <h3>Address</h3>
            <p>50 Main st, Boston MA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
