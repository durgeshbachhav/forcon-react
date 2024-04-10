import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Marine = () => {
  const data = [
    {
      No: 1,
      "Name of Work":
        "DVP Infra Projects Pvt. Ltd.- Construction of Anti Sea Erosion Bund Using Tetrapods & Groin from Murguwada Whilte Sea to Mirya",
      Department: "Sub-Contracts",
      Date: "2023-2024",
      Location: "Ratnagiri",
      "Total  Rs (in Crores)": 31.69,
    },
    {
      No: 2,
      "Name of Work":
        "DVP-Forcon (JV) - Construction of Jetty and Breakwater at Janjira Fort",
      Department: "Sub-Contracts",
      Date: "1 Year",
      Location: "Raigad",
      "Total  Rs (in Crores)": 18.59,
    },
    {
      No: 3,
      "Name of Work":
        "Construction of Krushi Bhavan Building St Shingada Talav, Gadkari Chowk",
      Department: "Maharashtra Maritime Board",
      Date: "1.5 Year",
      Location: "Nashik",
      "Total  Rs (in Crores)": 10.71,
    },
    {
      No: 4,
      "Name of Work":
        "Construction of Anti Sea Ersion Bund Using Tetrapod and Groynes from Murguwada White Sea to Mirya (More Tembe)",
      Department: "Engineering Project India",
      Date: "2 Year",
      Location: "Ratnagiri",
      "Total  Rs (in Crores)": 80.62,
    },
    {
      No: 5,
      "Name of Work": "Construction of Jetty and Breakwater at Janjira Fort.",
      Department: "Maharashtra Maritime Board",
      Date: "2 Year",
      Location: "Murud / Ratnagiri",
      "Total  Rs (in Crores)": 65.5,
    },
    {
      No: 6,
      "Name of Work":
        "Development of Fishries at Jeevana, Tal. Shrivardhan, Dist. Raigad",
      Department: "Breakwater",
      Date: "2 Year",
      Location: "Raigad",
      "Total  Rs (in Crores)": 158.06,
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
    <div>
      <section className="py-8 px-8 lg:px-24 ">
        <div className="mb-8 ">
          <Breadcrumb values={["Home", "Marine Engineering"]} />
        </div>

        <div className="py-2">
          <h2 className="tienne-bold text-2xl text-tableheadcolor">
            Navigating Innovation: Forcon Infra's Leading Marine Engineering
            Solutions
          </h2>
        </div>
        <p className="text-[18px]  georgia-regular lg:text-justify">
          Marine engineering is a critical aspect of our company as we're at the
          forefront of providing top-quality marine engineering solutions. With
          a focus on innovation and sustainability, we harness advanced
          technology and top-of-the-line equipment to deliver marine engineering
          solutions that meet the unique needs of the government.
        </p>

        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Marine;
