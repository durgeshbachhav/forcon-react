import React from "react";
import Breadcrumb from "../components/BreadCrumb";

const Rmc = () => {
  const data = [
    {
      department: "COMPLETED PROJECTS",
      projects: [
        {
          name: "Sinhasta & Road works",
          department: "PWD, NMC",
          shortName: "Road, Infra and Building Projects",
          value: "429.33",
        },
        {
          name: "Road",
          department: "NHAI",
          shortName:
            "Six Laning of Pimpalgaon- Nashik Gonde Section of NH-3 (EPC) Contract",
          value: "56.86",
        },
        {
          name: "Road",
          department: "NMC",
          shortName: "-",
          value: "45.11",
        },
        {
          name: "Road",
          department: "MMGSY",
          shortName: "-",
          value: "20.93",
        },
      ],
    },
    {
      department: "ONGOING PROJECTS",
      projects: [
        {
          name: "Road",
          department: "NMC",
          shortName: "Construction of 30 M DP Road at Nashik",
          value: "29.94",
        },
      ],
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-24">
      <section className="w-full ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Rmc"]} />
        </div>
        <div className="">
          <p className="text-[18px] text-justify georgia-regular">
            Forcon Infra is the industry leader in the Ready Mix Concrete (RMC)
            construction sector. The company provides a variety of high-quality
            RMC products that are customized to meet the particular needs of our
            customers. Every quantity of Forcon Infra's RMC is manufactured with
            state-of-the-art equipment and technology to ensure quality and
            durability.
          </p>
        </div>

        {/* add table */}
      </section>
    </div>
  );
};

export default Rmc;
