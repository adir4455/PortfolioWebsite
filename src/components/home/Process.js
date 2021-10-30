import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faDesktop,
  faObjectUngroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Process() {
  return (
    <section id="home-c" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">My Creative Process</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          All of my UI/UX and design projects are based off of a practiced
          formula to get the result that I am looking for
        </p>
        <div className="process">
          <div>
            <FontAwesomeIcon
              icon={faFileAlt}
              className="fas fa-file-alt fa-4x process-icon my-2 number"
            ></FontAwesomeIcon>
            <h3>Discuss The Project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              tenetur fuga sed similique tempora atque.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faDesktop}
              className="fas fa-desktop fa-4x process-icon my-2"
            ></FontAwesomeIcon>
            <h3>Brainstroming & Concept</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              tenetur fuga sed similique tempora atque.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faObjectUngroup}
              className="fas fa-object-ungroup fa-4x process-icon my-2"
            ></FontAwesomeIcon>
            <h3>UI/UX Planning</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              tenetur fuga sed similique tempora atque.
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="fas fa-thumbs-up fa-4x process-icon my-2"
            ></FontAwesomeIcon>
            <h3>Interaction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              tenetur fuga sed similique tempora atque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
