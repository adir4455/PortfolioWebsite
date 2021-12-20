import React from "react";
import HomeNavBar from "../navbar/HomeNavBar";
import Specialize from "./Specialize";
import Stats from "./Stats";
import Process from "./Process";
import Info from "../about/Info";
import ProgressBars from "../about/ProgressBars";

function HomePage() {
  return (
    <>
      <HomeNavBar />
      <Info />
      // <ProgressBars />
      {/*     
      // <Specialize /> Update in future
      // <Process /> Update in future
      // <Stats /> Update in future 
      */}
    </>
  );
}

export default HomePage;
