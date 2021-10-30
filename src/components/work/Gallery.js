import React from "react";
import instaramProject from "../../img/items/instagramProject.png";
import ComfySlotProject from "../../img/items/ComfySlothProject.png";
import GithubProject from "../../img/items/GithubProject.png";
import EdgeLedgerProject from "../../img/items/EdgeLedgerProject.png";
import QuizProject from "../../img/items/QuizProject.png";
import HackerNewsProject from "../../img/items/HackerNewsProject.png";
import item5 from "../../img/items/item5.png";
import item6 from "../../img/items/item6.png";
import item7 from "../../img/items/item7.png";
import item8 from "../../img/items/item8.png";
import item9 from "../../img/items/item9.png";

function Gallery() {
  return (
    <section id="work-a" className="text-center py-3">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <div className="bottom-line"></div>
        <p className="lead">Check out some of my projects</p>
        <div className="items">
          <a
            href="https://react-instagram-project.netlify.app/"
            target="_blank"
          >
            <div className="item">
              <div className="item-image">
                <img src={instaramProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">
                    ReactJS / JavaScript / CSS
                  </p>
                  <h2 className="item-text-title">Instagram</h2>
                </div>
              </div>
            </div>
          </a>

          <a href="https://react-e-commerce-adire.netlify.app/" target="_blank">
            <div className="item">
              <div className="item-image">
                <img src={ComfySlotProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">
                    ReactJS / JavaScript / CSS
                  </p>
                  <h2 className="item-text-title">Comfy Shop</h2>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://react-github-user-search-adire.netlify.app"
            target="_blank"
          >
            <div className="item">
              <div className="item-image">
                <img src={GithubProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">
                    ReactJS / JavaScript / CSS
                  </p>
                  <h2 className="item-text-title">Github users</h2>
                </div>
              </div>
            </div>
          </a>

          <a href="https://css-edge-ledger.netlify.app/" target="_blank">
            <div className="item">
              <div className="item-image">
                <img src={EdgeLedgerProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">CSS / HTML</p>
                  <h2 className="item-text-title">Edge Ledger</h2>
                </div>
              </div>
            </div>
          </a>
          <a href="https://react-quiz-adire.netlify.app/" target="_blank">
            <div className="item">
              <div className="item-image">
                <img src={QuizProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">
                    REACTJS / JAVASCRIPT / CSS
                  </p>
                  <h2 className="item-text-title">Quiz</h2>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://react-hacker-news-adire.netlify.app/"
            target="_blank"
          >
            <div className="item">
              <div className="item-image">
                <img src={HackerNewsProject} alt="" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">
                    REACTJS / JAVASCRIPT / CSS
                  </p>
                  <h2 className="item-text-title">Hacker News</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
