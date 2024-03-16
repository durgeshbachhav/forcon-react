import Breadcrumb from "../components/BreadCrumb";
import CrushersData from "../components/CrushersData";

const Crushers = () => {
  const projects = {
    projectData: [
      {
        number: "1",
        title: "20 MM Metal",
        department: "150 MM Metal",
        role: "All Product use in Road and Building work",
      },
      {
        number: "2",
        title: "10 MM Metal",
        department: "40 MM Metal",
        role: "All Product use in Road and Building work",
      },
      {
        number: "3",
        title: "6 MM Metal",
        department: "65 MM Metal",
        role: "All Product use in Road and Building work",
      },
      {
        number: "4",
        title: "Artificial Sand",
        department: "GSB",
        role: "All Product use in Road and Building work",
      },
    ],
    additionalInfo: [
      {
        heading: "Crushing Plant 250 TPH Make Sandvik",
        subHeading: "Production of Sandvik Plant",
      },
    ],
  };

  const production = {
    projectData: [
      {
        number: "1",
        title: "Wash Sand",
        department: "VSI Product",
        role: "All Product use Building work",
      },
      {
        number: "2",
        title: "Plaster Sand",
        department: "VSI Product",
        role: "All Product use Building work",
      },
    ],
    additionalInfo: [
      {
        heading: "Wash Plant 200 TPH Make Alstone",
        subHeading: "Production",
      },
    ],
  };

  const anotherProduction = {
    projectData: [
      {
        number: "1",
        title: "WMM",
        department: "Weat mix Macadam",
        role: "This Product use in Road work",
      },
    ],
    additionalInfo: [
      {
        heading: "WMM Plant 120 TPH",
        subHeading: "Production",
      },
    ],
  };
  return (
    <div className="py-8 px-8 lg:px-24">
      <div className="mb-8">
        <Breadcrumb values={["Home", "Verticals", "Crushers"]} />
      </div>
      <div>
        <p className="text-justify georgia-regular text-[18px]">
          Forcon Infra is also actively involved in the mining and construction
          industries, providing equipment, tools, services and solutions for the
          same. All our crushers are high performance machineries with
          commitment to sustainability, and designed to minimize environmental
          impact while delivering maximum productivity.
        </p>
      </div>
      <CrushersData projects={projects} />
      <CrushersData projects={production} />
      <CrushersData projects={anotherProduction} />
    </div>
  );
};

export default Crushers;
