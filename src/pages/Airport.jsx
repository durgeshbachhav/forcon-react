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
        <div>
          <p className="text-justify georgia-regular text-[18px]">
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
