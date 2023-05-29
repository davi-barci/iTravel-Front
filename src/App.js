import { BrowserRouter, Routes, Route } from "react-router-dom";
import { register } from "swiper/element/bundle";
import Home from "./pages/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FlightsSearch from "./pages/Flights/ FlightsSearch";
import HostingSearch from "./pages/Hosting/HostingSearch";
import FlightPage from "./pages/Flights/FlightPage";
import HostingPage from "./pages/Hosting/HostingPage";

register();

export default function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<FlightsSearch/>} />
          <Route path="/hosting" element={<HostingSearch/>} />
          <Route path="/flights/:id" element={<FlightPage/>} />
          <Route path="/hosting/:id" element={<HostingPage/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}


