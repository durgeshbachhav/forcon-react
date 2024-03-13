import React from "react";
import Highway from "../assets/img/highway.png";
import Airport from "../assets/img/airport.png";
import Crusher from "../assets/img/crush.png";
import Marine from "../assets/img/marine.png";
import Rmc from "../assets/img/rmc.png";
import Dams from "../assets/img/dams.png";
import Building from "../assets/img/building3.png";
import Manufacturing from "../assets/img/manufacturing.png";
import { Link } from "react-router-dom";

const Sector = () => {
  return (
    <div className="bg-[#cbfbff] py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center py-4">
          Sectors we are active in:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4 ">
          <Link
            to={`/verticals/highway`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4 "
          >
            <img src={Highway} alt="" className="w-12 sm:w-16" />
            <p className="text-base sm:text-lg text-white hover:text-black  font-medium">
              Highway Construction
            </p>
          </Link>
          <Link
            to={`/verticals/airports`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Airport} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Airport Infrastructure
            </p>
          </Link>
          <Link
            to={`/verticals/crushers`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Crusher} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Crushers Manufacturing
            </p>
          </Link>
          <Link
            to={`/verticals/rmc`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Rmc} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Ready Mix Concrete
            </p>
          </Link>
          <Link
            to={`/verticals/marine-engineering`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4 "
          >
            <img src={Marine} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Marine Engineering
            </p>
          </Link>
          <Link
            to={`/verticals/buildings`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Building} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Commercial Buildings
            </p>
          </Link>
          <Link
            to={`/verticals/dams-irrigation`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Dams} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Dams & Irrigation Projects
            </p>
          </Link>
          <Link
            to={`/verticals/Flyovers-and-bridges`}
            className="flex flex-row items-center bg-blue-400 hover:bg-blue-300  rounded-lg p-2 sm:p-4 Sector-card-animation cursor-pointer gap-4"
          >
            <img src={Manufacturing} alt="" className="w-12 sm:w-16" />
            <p className="text-base text-white hover:text-black sm:text-lg font-medium">
              Flyovers & Bridges
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sector;
