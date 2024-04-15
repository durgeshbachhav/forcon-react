import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const FlyoverAndBridge = () => {
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
      "Name of Work":
        "Construction of Approaches for Railway Over Bridge (ROB) on Nampur Satana Kalwan Wani Pimpalgaon Niphad Sinner Road",
      Department: "PWD",
      Date: "2022-2024",
      Location: "Nashik",
      "Total Rs": 100,
    },
    {
      No: 2,
      "Name of Work":
        "Construction of Approaches for Railway Over Bridge (ROB) on Nampur Satana Kalwan Wani Pimpalgaon Niphad Sinner Road SH-27 (Near Kundewadi Village) at 115/000 Tal. Niphad Dist. Nashik",
      Department: "Bridges",
      Date: "1 year",
      Location: "Nashik",
      "Total Rs": 40.605,
    },
    {
      No: 3,
      "Name of Work":
        "Construction of High Level Bridge Across Waghur River at Km 2/415 on Kadgaon Jogalkhede Road VR-1 Under Submergence of Shelgaon Barrage Medium Project",
      Department: "Bridges",
      Date: "2 year",
      Location: "Jalgoan / Nashik",
      "Total Rs": 22.41,
    },
  ];

  return (
    <div>
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Flyovers & Bridges"]} />
        </div>

        <div className="py-2">
          <h2 className="tienne-bold text-2xl text-tableheadcolor">
            Our Legacy in Flyovers and Bridge Construction
          </h2>
        </div>
        <div>
          <p className="text-[18px] lg:text-justify georgia-regular">
            At Forcon Infra, we pride ourselves on being at the forefront of
            flyovers and bridge construction. With a rich legacy of expertise in
            highway and transportation infrastructure, we stand as a beacon of
            quality, safety, and innovation in the industry.
          </p>
        </div>
        <div className="mt-6 flex flex-col ">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default FlyoverAndBridge;
