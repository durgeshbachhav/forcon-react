import React from "react";
import Highway from "../assets/img/highway.png";
import Airport from "../assets/img/airport.png";
import Crusher from "../assets/img/crush.png";
import Marine from "../assets/img/marine.png";
import Rmc from "../assets/img/rmc.png";
import Dams from "../assets/img/dams.png";
import Building from "../assets/img/building3.png";
import Flyovers from "../assets/img/lastbridge.png";
import { Link } from "react-router-dom";

const VerticalLink = ({ to, imgSrc, altText }) => (
  <Link
    to={`/verticals/${to}`}
    className="flex items-center justify-center  rounded-md  bg-uicolor hover:bg-secondary "
  >
    <img src={imgSrc} alt={altText} className="w-40 lg:w-48" />
  </Link>
);

const Sector = (  ) => {
  
  const sectors = [
    { to: "highway", imgSrc: Highway, altText: "Highway" },
    { to: "airports", imgSrc: Airport, altText: "Airports" },
    { to: "crushers", imgSrc: Crusher, altText: "Crushers" },
    { to: "rmc", imgSrc: Rmc, altText: "RMC" },
    { to: "marine-engineering", imgSrc: Marine, altText: "Marine Engineering" },
    { to: "buildings", imgSrc: Building, altText: "Buildings" },
    { to: "dams-irrigation", imgSrc: Dams, altText: "Dams & Irrigation" },
    {
      to: "Flyovers-and-bridges",
      imgSrc: Flyovers,
      altText: "Flyovers & Bridges",
    },
  ];

  return (
    <div id="sector"  className="bg-primary py-8 px-8 md:py-12 lg:px-12 ">
      <Link className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center py-4 font-tienne">
          Sectors we are active in:
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 ">
          {sectors.map((sector, index) => (
            <VerticalLink key={index} {...sector} />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Sector;
