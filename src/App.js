import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}


