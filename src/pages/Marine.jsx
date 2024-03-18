import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Marine = () => {
  const data = [
    {
      no: 1,
      "Name of Work":
        "dvp infra projects pvt. ltd.- construction of anti sea erosion bund using tetrapods & groin from murguwada whilte sea to mirya",
      Department: "Sub-Contracts",
      Date: "2023-2024",
      Location: "RATNAGIRI",
      "Total  Rs (In Crores)": 31.69,
    },
    {
      no: 2,
      "Name of Work":
        "dvp-forcon (jv) - construction of jetty and breakwater at janjira fort",
      Department: "Sub-Contracts",
      date: "1 Year", //check this
      Location: "RAIGAD",
      "Total  Rs (In Crores)": 18.59,
    },
    {
      no: 3,
      "Name of Work":
        "Construction of Krushi Bhavan Building st Shingada Talav, Gadkari Chowk",
      Department: "MAHARASHTRA MARITIME BOARD",
      Date: "1.5 YEAR",
      Location: "NASHIK",
      "Total  Rs (In Crores)": 10.71,
    },
    {
      no: 4,
      "Name of Work":
        "Construction of Anti Sea Ersion Bund Using Tetrapod and Groynes from Murguwada white sea to Mirya (More Tembe)",
      Department: "ENGINEERING PROJECT INDIA",
      Date: "2 YEAR",
      Location: "Ratnagiri",
      "Total  Rs (In Crores)": 80.62,
    },
    {
      no: 5,
      "Name of Work": "Construction of Jetty and Breakwater at Janjira Fort.",
      Department: "MAHARASHTRA MARITIME BOARD",
      Date: "2 YEAR",
      Location: "MURUD / Ratnagiri",
      "Total  Rs (In Crores)": 65.5,
    },
    {
      no: 6,
      "Name of Work":
        "Development of Fishries at Jeevana, Tal. Shrivardhan, Dist. Raigad",
      Department: "BREAKWATER",
      Date: "2 YEAR",
      Location: "RAIGAD",
      "Total  Rs (In Crores)": 158.06,
    },
  ];

  const headings = [
    "Sr. No",
    "Name of Work",
    "DepartMent",
    "Date",
    "Location",
    "Total Rs(In Crores)",
  ];

  return (
    <div className="py-8 px-8 lg:px-20">
      <div className="mb-8">
        <Breadcrumb values={["Home", "Verticals", "Marine Engineering"]} />
      </div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p className="text-justify font-tienne  text-[18px]">
              Marine engineering is a critical aspect of our company as we're at
              the forefront of providing top-quality marine engineering
              solutions. With a focus on innovation and sustainability, we
              harness advanced technology and top-of-the-line equipment to
              deliver marine engineering solutions that meet the unique needs of
              the government.
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

export default Marine;
