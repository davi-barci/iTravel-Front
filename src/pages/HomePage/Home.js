import { useEffect, useState } from "react";
import DataSection from "./DataSection/DataSection";
import MainSection from "./MainSection/MainSection";
import Newsletter from "./Newsletter/Newsletter";
import TopDestination from "./TopDestinationSection/TopDestination";
import Tutorial from "./TutorialSection/Tutorial";
import axios from "axios";

export default function Home(){
  return(
    <>
      <MainSection/>
      <Tutorial/>
      <TopDestination/>
      <DataSection/>
      <Newsletter/>
    </>
  );
}





