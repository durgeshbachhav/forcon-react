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
      "name of work":
        "construction of left side ghat on d/s of janardan swami bridge in dasak panchak area on godavari river.",
      department: "minor irrigation",
      "total  rs (in crores)": 19.53,
      date: "2015-2017",
      location: "nashik ",
    },
    {
      no: 2,
      "name of work":
        "constructing of right side ghat on d/s of janardan swami bridge in dasak panchak area on godavari river. ",
      department: "minor irrigation",
      "total  rs (in crores)": 17.44,
      date: "2015-2017",
      location: "nashik ",
    },
    {
      no: 3,
      "name of work":
        "constructing of right side ghat on d/s of nasardi-godavari sangam in takali area at nashik .",
      department: "minor irrigation",
      "total  rs (in crores)": 18.02,
      date: "2015-2017",
      location: "nashik ",
    },
  ];

  return (
    <div className="">
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Dams"]} />
        </div>
        <div>
          <p className="text-[18px] text-justify georgia-regular">
            Forcon Infra stands as a cutting-edge firm specializing in airport
            infrastructure development and timely project delivery. Our
            expertise extends to constructing runways, taxiways, aprons, and
            other vital airport facilities. Forcon Infra also prioritizes safety
            and sustainability, ensuring that our projects are safe and
            environment friendly.
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
