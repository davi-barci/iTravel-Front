import { BrowserRouter, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Home from "./pages/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FlightsSearch from "./pages/Flights/ FlightsSearch";
import HotelsSearch from "./pages/Hotels/HotelsSearch";
import FlightPage from "./pages/Flights/FlightPage";
import HotelsPage from "./pages/Hotels/HotelsPage";

register();

export default function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights/:cidadeOrigem/:cidadeDestino" element={<FlightsSearch/>} />
          <Route path="/hotels" element={<HotelsSearch/>} />
          <Route path="/flights/:id" element={<FlightPage/>} />
          <Route path="/hotels/:id" element={<HotelsPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}


