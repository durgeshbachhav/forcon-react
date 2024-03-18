import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Marine = () => {
  const data = [
    {
      no: 1,
      "name of work":
        "dvp infra projects pvt. ltd.- construction of anti sea erosion bund using tetrapods & groin from murguwada whilte sea to mirya",
      department: "sub-contracts",
      date: "2023-2024",
      location: "ratnagiri",
      "total  rs (in crores)": 31.69,
    },
    {
      no: 2,
      "name of work":
        "dvp-forcon (jv) - construction of jetty and breakwater at janjira fort",
      department: "sub-contracts",
      date: "1 year",
      location: "raigad",
      "total  rs (in crores)": 18.59,
    },
    {
      no: 3,
      "name of work":
        "construction of krushi bhavan building st shingada talav, gadkari chowk",
      department: "maharashtra maritime board",
      date: "1.5 year",
      location: "nashik",
      "total  rs (in crores)": 10.71,
    },
    {
      no: 4,
      "name of work":
        "construction of anti sea ersion bund using tetrapod and groynes from murguwada white sea to mirya (more tembe)",
      department: "engineering project india",
      date: "2 year",
      location: "ratnagiri",
      "total  rs (in crores)": 80.62,
    },
    {
      no: 5,
      "name of work": "construction of jetty and breakwater at janjira fort.",
      department: "maharashtra maritime board",
      date: "2 year",
      location: "murud / ratnagiri",
      "total  rs (in crores)": 65.5,
    },
    {
      no: 6,
      "name of work":
        "development of fishries at jeevana, tal. shrivardhan, dist. raigad",
      department: "breakwater",
      date: "2 year",
      location: "raigad",
      "total  rs (in crores)": 158.06,
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
          <Breadcrumb values={["Home", "Verticals", "Marine Engineering"]} />
        </div>
        <p className="text-[18px] text-justify georgia-regular">
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
