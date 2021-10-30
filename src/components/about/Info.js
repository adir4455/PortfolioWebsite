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
          <div className="bio bg-light">
            <h4>Adir Elmakyes, Computer Science Student</h4>
            <p>
              Computer Science Student skilled in ReactJS, JavaScript, CSS,
              HTML, Phyton and C.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
