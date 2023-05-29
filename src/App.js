import { BrowserRouter, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Home from "./pages/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FlightsSearch from "./pages/Flights/ FlightsSearch";
import HotelsSearch from "./pages/Hotels/HotelsSearch";
import FlightPage from "./pages/Flights/FlightPage";
import HotelsPage from "./pages/Hotels/HotelsPage";
import CitiesContext from "./contexts/CitiesContext";
import FlightsContext from "./contexts/FlightsContext";
import HotelsContext from "./contexts/HotelsContext";
import { useEffect, useState } from "react";
import axios from "axios";

register();

export default function App() {
  const [cities, setCities] = useState([]);
  const [originCity, setOriginCity] = useState(0);
  const [destinationCity, setDestinationCity] = useState(0);
  const [minValueFlight, setMinValueFlight] = useState(0);
  const [maxValueFlight, setMaxValueFlight] = useState(10000);
  const [minValueHotels, setMinValueHotels] = useState(0);
  const [maxValueHotels, setMaxValueHotels] = useState(10000);

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

  return (
    <BrowserRouter>
        <NavBar/>
        <CitiesContext.Provider value={{ cities, setCities }}>
        <HotelsContext.Provider value={{minValueHotels, setMinValueHotels, maxValueHotels, setMaxValueHotels}}>
        <FlightsContext.Provider value={{originCity, setOriginCity, destinationCity, setDestinationCity, minValueFlight, setMinValueFlight, maxValueFlight, setMaxValueFlight}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flights/:cidadeOrigem/:cidadeDestino" element={<FlightsSearch/>} />
            <Route path="/hotels/:cidadeDestino" element={<HotelsSearch/>} />
            <Route path="/flights/:id" element={<FlightPage/>} />
            <Route path="/hotels/:cidadeDestino/:id" element={<HotelsPage/>} />
          </Routes>
        </FlightsContext.Provider>
        </HotelsContext.Provider>
        </CitiesContext.Provider>
        <Footer/>
    </BrowserRouter>
  );
}


