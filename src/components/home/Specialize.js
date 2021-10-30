import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faDesktop,
  faObjectUngroup,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Specialize() {
  return (
    <section id="home-a" className="text-center py-2">
      <div className="container">
        <h2 className="section-title">I Specialize In</h2>
        <div className="bottom-line"></div>
        <p className="lead">
          Photography as well as creating digital masterpieces and UI/UX layouts
          for websites and mobile applications
        </p>
        <div className="specials">
          <div>
            <FontAwesomeIcon icon={faFile} className="fa-2x fa-file-alt fas" />
            <h3>Concepting</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor incidunt, facere explicabo veritatis quo delectus
              dignissimos aliquam fuga commodi.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faDesktop}
              className="fas fa-desktop fa-2x"
            />
            <h3>UI/UX</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor incidunt, facere explicabo veritatis quo delectus
              dignissimos aliquam fuga commodi.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faObjectUngroup}
              className="fas fa-object-ungroup fa-2x"
            />
            <h3>Visual Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor incidunt, facere explicabo veritatis quo delectus
              dignissimos aliquam fuga commodi.
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="fas fa-thumbs-up fa-2x"
            />
            <h3>Interaction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              dolor incidunt, facere explicabo veritatis quo delectus
              dignissimos aliquam fuga commodi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialize;
