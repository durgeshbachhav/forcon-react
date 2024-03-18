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
      "name of work":
        "construction of approaches for railway over bridge (rob) on nampur satana kalwan wani pimpalgaon niphad sinner road",
      department: "PWD",
      date: "2022-2024",
      location: "nashik",
      totalRs: 100,
    },
    {
      no: 2,
      "name of work":
        "construction of approaches for railway over bridge (rob) on nampur satana kalwan wani pimpalgaon niphad sinner road sh-27 (near kundewadi village) at 115/000 tal. niphad dist. nashik",
      department: "bridges",
      date: "1 year",
      location: "nashik",
      totalRs: 40.605,
    },
    {
      no: 3,
      "name of work":
        "construction of high level bridge across waghur river at km 2/415 on kadgaon jogalkhede road vr-1 under submergence of shelgaon barrage medium project",
      department: "bridges",
      date: "2 year",
      location: "jalgoan / nashik",
      totalRs: 22.41,
    },
  ];

  return (
    <div>
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Flyovers & Bridges"]} />
        </div>
        <div>
          <p className="text-[18px] text-justify georgia-regular">
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
