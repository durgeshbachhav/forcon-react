import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Highway from "./pages/Highway";
import Airport from "./pages/Airport";
import Crushers from "./pages/Crushers";
import Marine from "./pages/Marine";
import Building from "./pages/Buildings";
import Dam from "./pages/Dam";
import PlantAndMachinary from "./pages/PlantAndMachinary";
import Contact from "./pages/Contact";
import Rmc from "./pages/Rmc";
import FlyoverAndBridge from "./pages/FlyoversAndBridges";


function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/verticals/highway" element={<Highway />} />
        <Route path="/verticals/airports" element={<Airport />} />
        <Route path="/verticals/crushers" element={<Crushers />} />
        <Route path="/verticals/rmc" element={<Rmc />} />
        <Route
          path="/verticals/flyovers-and-bridges"
          element={<FlyoverAndBridge />}
        />
        <Route path="/verticals/marine-engineering" element={<Marine />} />
        <Route path="/verticals/buildings" element={<Building />} />
        <Route path="/verticals/dams-irrigation" element={<Dam />} />
        <Route path="/plant-and-machinery" element={<PlantAndMachinary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
