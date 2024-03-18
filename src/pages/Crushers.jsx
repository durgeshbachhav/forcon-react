import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Crushers = () => {
  const headings = ["Sr. No", "VSI Product", "HIS Product", ""];
  const projectOne = [
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
  ];

  const projectTwo = [
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
  ];

  const projectThree = [
    {
      number: "1",
      title: "WMM",
      department: "Weat mix Macadam",
      role: "This Product use in Road work",
    },
  ];

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

      <div className="py-8 font-tienne">
        <h2 className="text-xl py-2">Crushing Plant 250 TPH Make Sandvik</h2>
        <h5 className="">Production of Sandvik Plant</h5>
        <Table data={projectOne} headings={headings} />
      </div>
      <div className="py-2 font-tienne">
        <h2 className="text-xl py-2">WMM Plant 120 TPH</h2>
        <h5>Production</h5>
        <Table data={projectTwo} headings={headings} />
      </div>
      <div className="py-2 font-tienne">
        <h2 className="text-xl py-2">WMM Plant 120 TPH</h2>
        <h5>Production</h5>
        <Table data={projectThree} headings={headings} />
      </div>
    </div>
  );
};

export default Crushers;
