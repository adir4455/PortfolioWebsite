import React from "react";
import HomeNavBar from "../navbar/HomeNavBar";
import Specialize from "./Specialize";
import Stats from "./Stats";
import Process from "./Process";

function HomePage() {
  return (
    <>
      <HomeNavBar />
      <Specialize />
      <Process />
      <Stats />
    </>
  );
}

export default HomePage;
