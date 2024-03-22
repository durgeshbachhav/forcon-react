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
        No: 1,
        "Name of Work": "Construction of Left Side Ghat on D/S of Janardan Swami Bridge in Dasak Panchak Area on Godavari River",
        Department: "Minor Irrigation",
        "Total  Rs (in Crores)": 19.53,
        Date: "2015-2017",
        Location: "Nashik",
    },
    {
        No: 2,
        "Name of Work": "Constructing of Right Side Ghat on D/S of Janardan Swami Bridge in Dasak Panchak Area on Godavari River",
        Department: "Minor Irrigation",
        "Total  Rs (in Crores)": 17.44,
        Date: "2015-2017",
        Location: "Nashik",
    },
    {
        No: 3,
        "Name of Work": "Constructing of Right Side Ghat on D/S of Nasardi-Godavari Sangam in Takali Area at Nashik",
        Department: "Minor Irrigation",
        "Total  Rs (in Crores)": 18.02,
        Date: "2015-2017",
        Location: "Nashik",
    },
];


  return (
    <div className="">
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Dams"]} />
        </div>
        <div>
          <p className="text-[18px] text-justify georgia-regular">
          At Forcon Infra, we construct colossal dams and implement state-of-the-art irrigation technology to revolutionize water management. Our unwavering commitment involves thorough planning, precise design, impeccable execution, and ongoing maintenance, all in adherence to industry standards.
          </p>
        </div>
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default Dam;
