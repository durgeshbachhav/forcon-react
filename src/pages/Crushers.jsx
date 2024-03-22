import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";

const Crushers = () => {
  const headings = ["Sr. No", "VSI Product", "HIS Product", ""];
  const headingsTwo = ["Sr. No", "", "", "Remark"];
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
  const projectFour = [
    {
      number: "1",
      title: "Artificial Sand",
      department: "VSI",
      role: "Use Building and Road Work",
    },
    {
      number: "2",
      title: "Plaster Artificial Sand",
      department: "VSI",
      role: "Only Use Building Work",
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-24">
      <div className="mb-8">
        <Breadcrumb values={["Home", "Verticals", "Crushers"]} />
      </div>
      <div>
        <p className="text-justify georgia-regular text-[18px]">
          Forcon Infra leads the mining and construction sectors with our
          advanced crushers, delivering premium-shaped aggregate and unmatched
          efficiency. Our crushers feature easy maintenance, low operational
          costs per ton, reduced power consumption, and a large feed opening for
          optimal performance. With innovative designs for easy throw setting
          modification and unique crushing chambers, we ensure consistent
          product quality and shape while maximizing capacity. Our dust seal
          system protects internal components, minimizing maintenance costs and
          achieving the highest production rates in their category.
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
      <div className="py-2 font-tienne">
        <h2 className="text-xl py-2">Propel Sander Cone Plant 50 TPH</h2>
        <h5>Production</h5>
        <Table data={projectFour} headings={headingsTwo} />
      </div>
    </div>
  );
};

export default Crushers;
