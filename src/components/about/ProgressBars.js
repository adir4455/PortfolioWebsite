import React from "react";

function ProgressBars() {
  return (
    <section id="about-b" className="py-3 bg-dark">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        <h4>ReactJS:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
        <h4>JavaScript:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
        <h4>HTML & CSS:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
        <h4>Python:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
        <h4>C:</h4>
        <div className="progress">
          <div style={{ width: "100%" }}></div>
        </div>
      </div>
    </section>
  );
}

export default ProgressBars;
