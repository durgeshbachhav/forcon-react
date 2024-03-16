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
      no: 1,
      nameOfWork:
        "CONSTRUCTION OF APPROACHES FOR RAILWAY OVER BRIDGE (ROB) ON NAMPUR SATANA KALWAN WANI PIMPALGAON NIPHAD SINNER ROAD ",
      department: "PWD",
      date: "2022-2024",
      Location: "nashik",
      totalRs: 100,
    },
    {
      no: 2,
      nameOfWork:
        "Construction of Approaches for Railway over Bridge (ROB) on Nampur Satana Kalwan Wani Pimpalgaon Niphad Sinner Road SH-27 (Near Kundewadi Village) at 115/000 Tal. Niphad Dist. Nashik",
      department: "Bridges",
      date: "1 YEAR",
      Location: "NASHIK",
      totalRs: 40.605,
    },
    {
      no: 3,
      nameOfWork:
        "Construction of High Level Bridge Across Waghur River at Km 2/415 on Kadgaon Jogalkhede Road VR-1 under Submergence of Shelgaon Barrage Medium Project",
      department: "Bridges",
      date: "2 YEAR",
      Location: "JALGOAN / NASHIK",
      totalRs: 22.41,
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-20">
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Flyovers & Bridges"]} />
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p className="text-justify  text-[18px] font-tienne">
              At Forcon Infra, we pride ourselves on being at the forefront of
              flyovers and bridge construction. With a rich legacy of expertise
              in highway and transportation infrastructure, we stand as a beacon
              of quality, safety, and innovation in the industry.
            </p>
          </div>
        </div>

        <div className="">
          <Table data={data} headings={headings} />
        </div>
      </section>
    </div>
  );
};

export default FlyoverAndBridge;
