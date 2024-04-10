import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Airport = () => {
  const data = [
    {
      no: 1,
      name: "Airport Boundary Wall",
      department: "MADCL",
      status: "Completed",
      value: "9.25",
    },
    {
      no: 2,
      name: "Asphalt Surface of Runway of Ozar Airport",
      department: "Work and Service Department",
      status: "Completed",
      value: "7.64",
    },
  ];

  const headings = [
    "Sr. No",
    "Type of Project",
    "Department",
    "Status",
    "Value",
  ];
  return (
    <>
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Airports"]} />
        </div>
        <div className="py-2">
          <h2 className="tienne-bold text-2xl text-tableheadcolor">
            Elevating Air Travel: Forcon Infra's Pioneering Approach to Airport
            Infrastructure Development
          </h2>
        </div>
        <div>
          <p className=" georgia-regular text-[18px] lg:text-justify">
            Forcon Infra stands as a cutting-edge firm specializing in airport
            infrastructure development and timely project delivery. Our
            expertise extends to constructing runways, taxiways and other vital
            airport facilities. Forcon Infra also prioritizes safety and
            sustainability, ensuring that our projects are secure and
            eco-friendly.
          </p>
        </div>
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </>
  );
};

export default Airport;
