import React from "react";

function HeaderContent() {
  return (
    <div className="header-content">
      <h1>
        I Am Adir The
        <span
          className="txt-type"
          data-wait="3000"
          data-words='[" Developer", " Desinger"]'
        ></span>
      </h1>
      <a href="work.html" className="btn-light">
        View My Work
      </a>
    </div>
  );
}

export default HeaderContent;
