import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../../img/about.jpg";

function Info() {
  return (
    <section id="about-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Let me tell you a little about myself and what I do...
        </p>
        <div className="about-info">
          <img src={aboutImage} alt="" className="bio-image" />
          <div className="bio bg-light">
            <h4>Your Project Is In Safe Hands</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
              neque pariatur, suscipit voluptate expedita repellat animi aliquid
              voluptatem fuga molestiae perspiciatis eaque a cumque nobis eius
              ipsum, explicabo soluta vero!
            </p>
          </div>

          <div className="award-1">
            <FontAwesomeIcon icon={faAward} className="fas fa-award fa-3x" />
            <h3>Award One</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, eius.
            </p>
          </div>
          <div className="award-2">
            <FontAwesomeIcon icon={faAward} className="fas fa-award fa-3x" />
            <h3>Award Two</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, eius.
            </p>
          </div>
          <div className="award-3">
            <FontAwesomeIcon icon={faAward} className="fas fa-award fa-3x" />
            <h3>Award Three</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, eius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
