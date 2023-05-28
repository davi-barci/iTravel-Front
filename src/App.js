import { BrowserRouter, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Home from "./pages/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FlightsSearch from "./pages/Flights/ FlightsSearch";

register();

export default function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightsSearch/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}


