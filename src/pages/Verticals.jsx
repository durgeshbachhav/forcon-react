import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Sector from "../components/Sector";
import Table from "../components/Table";
import { Route, Routes } from "react-router-dom";
import Highway from "./Highway";

const Verticals = () => {
  const projectHeadings = [
    "Type Of Project",
    "Department",
    "Project Value in millions",
    "Status",
  ];

  const CompletedProjectData = [
    {
      "Type Of Project": "Creek Development",
      Department: "TSCL",
      "Project Value in millions": 505.3,
      Status: "Ongoing",
    },
  ];
  const OngoingProjectData = [
    {
      "Type Of Project": "Drainage Work",
      Department: "MCGM",
      "Project Value in millions": 747.1,
      Status: "Completed",
    },
    {
      "Type Of Project": "Cricket Stadium",
      Department: "NMC",
      "Project Value in millions": 342.2,
      Status: "Completed",
    },
    {
      "Type Of Project": "Drainage Work",
      Department: "NMC",
      "Project Value in millions": 61,
      Status: "Completed",
    },
    {
      "Type Of Project": "Play Ground",
      Department: "PCMC",
      "Project Value in millions": 23.9,
      Status: "Completed",
    },
  ];

  return (
    <div className="">
      {/* breadcrumb */}
      <div className="mb-8 py-8 px-8 lg:px-20">
        <Breadcrumb values={["Home", "Verticals"]} />
      </div>

      {/* text passage */}
      <div className="py-4 text-[16px] px-8 lg:px-20 georgia-regular">
        We pride ourselves of having knowledge in the construction sectors of
        bridges, buildings, airports, ships, and stone crushers. We are a
        reputable business with years of experience working in the construction
        field, offering excellent building solutions to numerous clients in
        several industries. Our team is made up of highly qualified and
        experienced individuals that are dedicated to providing our customers
        with top-notch work and service. We are dedicated to satisfying the
        demands of our clients in all facets of the building process with our
        broad variety of services. We are your dependable partner in creating a
        better tomorrow, from conception to implementation.
      </div>
      <Sector />
      {/* completed project */}
      <div className="py-8 px-8 lg:px-20">
        <h2 className="text-3xl font-tienne">Completed Projects</h2>
        <Table data={CompletedProjectData} headings={projectHeadings} />
      </div>
      <div className="py-8 px-8 lg:px-20">
        <h2 className="text-3xl font-tienne">Ongoing Projects</h2>
        <Table data={OngoingProjectData} headings={projectHeadings} />
      </div>
      <div></div>
    </div>
  );
};

export default Verticals;
