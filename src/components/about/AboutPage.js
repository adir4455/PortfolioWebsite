import React from "react";
import Info from "./Info";
import ProgressBars from "./ProgressBars";
import AboutNavBar from "../navbar/AboutNavBar";

function AboutPage() {
  return (
    <>
      <AboutNavBar />
      <Info />
      <ProgressBars />
    </>
  );
}

export default AboutPage;
