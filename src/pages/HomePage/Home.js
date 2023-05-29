import { useEffect, useState } from "react";
import DataSection from "./DataSection/DataSection";
import MainSection from "./MainSection/MainSection";
import Newsletter from "./Newsletter/Newsletter";
import TopDestination from "./TopDestinationSection/TopDestination";
import Tutorial from "./TutorialSection/Tutorial";
import axios from "axios";

export default function Home(){
  const [cities, setCities] = useState([]);

  useEffect(() => {
      axios
      .get(`${process.env.REACT_APP_API_URL}/cities`)
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return(
    <>
      <MainSection cities={cities}/>
      <Tutorial/>
      <TopDestination cities={cities}/>
      <DataSection/>
      <Newsletter/>
    </>
  );
}





