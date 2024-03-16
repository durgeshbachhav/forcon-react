import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Dam = () => {
  const headings = [
    "Sr. No",
    "Name of Work",
    "DepartMent",
    "Date",
    "Location",
    "Total Rs(In Crores)",
  ];

  const data = [
    {
      no: 1,
      "Name of Work":
        "CONSTRUCTION OF LEFT SIDE GHAT ON D/S OF JANARDAN SWAMI BRIDGE IN DASAK PANCHAK AREA ON GODAVARI RIVER.",
      Department: "Minor Irrigation",
      "Total  Rs (In Crores)": 19.53,
      Date: "2015-2017",
      Location: "NASHIK ",
    },
    {
      no: 2,
      "Name of Work":
        "CONSTRUCTING OF RIGHT SIDE GHAT ON D/S OF JANARDAN SWAMI BRIDGE IN DASAK PANCHAK AREA ON GODAVARI RIVER. ",
      Department: "Minor Irrigation",
      "Total  Rs (In Crores)": 17.44,
      Date: "2015-2017",
      Location: "NASHIK ",
    },
    {
      no: 3,
      "Name of Work":
        "CONSTRUCTING OF RIGHT SIDE GHAT ON D/S OF NASARDI-GODAVARI SANGAM IN TAKALI AREA AT NASHIK .",
      Department: "Minor Irrigation",
      "Total  Rs (In Crores)": 18.02,
      Date: "2015-2017",
      Location: "NASHIK ",
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-20">
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Dams"]} />
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p className="text-justify  text-[18px] font-tienne">
              Forcon Infra stands as a cutting-edge firm specializing in airport
              infrastructure development and timely project delivery. Our
              expertise extends to constructing runways, taxiways, aprons, and
              other vital airport facilities. Forcon Infra also prioritizes
              safety and sustainability, ensuring that our projects are safe and
              environment friendly.
            </p>
          </div>
        </div>
        <div>
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Dam;
