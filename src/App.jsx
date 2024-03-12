import { Route, Routes } from "react-router-dom";
import Accordion from "./components/Accordion";
import CardCarousel from "./components/CardCarousel";
import Carousel from "./components/Carousel";
import FamilyComponent from "./components/FamilyComponent";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sector from "./components/Sector";
import TimeLine from "./components/TimeLine";
import Home from "./pages/Home";
import About from "./pages/About";
import Highway from "./pages/Highway";
import Airport from "./pages/Airport";
import Crushers from "./pages/Crushers";
import FlyoversAndBridges from "./pages/FlyoversAndBridges";
import Marine from "./pages/Marine";
import Building from "./pages/Buildings";
import Dam from "./pages/Dam";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/verticals/highway" element={<Highway />} />
        <Route path="/verticals/airport" element={<Airport />} />
        <Route path="/verticals/crushers" element={<Crushers />} />
        <Route
          path="/verticals/flyovers-and-bridges"
          element={<FlyoversAndBridges />}
        />
        <Route path="/verticals/marine" element={<Marine />} />
        <Route path="/verticals/buildings" element={<Building />} />
        <Route path="/verticals/dam" element={<Dam />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
