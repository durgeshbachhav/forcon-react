import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";
import images from "../carouselData/crushersCarousel";
import Carousel from "../components/Carousel";

const Crushers = () => {
  const headings = ["Sr. No", "VSI Product", "HIS Product", "Application"];
  // const headingsTwo = ["Sr. No", "", "", "Remark"];
  const projectOne = [
    {
      number: "1",
      title: "20 MM VSI Metal",
      department: "150 MM Metal",
      role: "Product used in Road, Building work,RMC and Bitumen work",
    },
    {
      number: "2",
      title: "10 MM VSI Metal",
      department: "40 MM Metal",
      role: "Product used in Road, Building work,RMC and Bitumen work",
    },
    {
      number: "3",
      title: "6 MM VSI Metal",
      department: "65 MM Metal",
      role: "Product used in Road, Building work,RMC and Bitumen work",
    },
    {
      number: "4",
      title: "Artificial Sand VSI metal",
      department: "GSB",
      role: "All Product used in Road and Building work",
    },
  ];

  const projectTwo = [
    {
      number: "1",
      title: "Wash Sand",
      department: "VSI Product",
      role: "All Product used for Building work",
    },
    {
      number: "2",
      title: "Plaster Sand",
      department: "VSI Product",
      role: "All Product used for Building work",
    },
  ];

  const projectThree = [
    {
      number: "1",
      title: "WMM",
      department: "Wet mix Macadam",
      role: "This Product is used for Road work",
    },
  ];
  const projectFour = [
    {
      number: "1",
      title: "Artificial Sand",
      department: "VSI",
      role: "Used for Building and Road Work",
    },
    {
      number: "2",
      title: "Plaster Artificial Sand",
      department: "VSI",
      role: "Only Used for Building Work",
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-24">
      <div className="mb-8">
        <Breadcrumb values={["Home", "Crushers"]} />
      </div>
      <div className="py-4">
        <h2 className="tienne-bold text-2xl text-tableheadcolor">
          Don't Just Break It, Crush It: Forcon Infra's Cutting-Edge Crushers
        </h2>
      </div>
      <Carousel images={images} title={false} />

      <div className="mt-10">
        <ul className="list-disc georgia-regular text-base lg:text-lg text-start px-4">
          <li className="">
            <span className="font-bold">Mining and Construction : </span>{" "}
            Spearheading transformation in mining and construction industries.
          </li>
          <li>
            <span className="font-bold">State-of-the-Art Crushers : </span>
            Renowned for superior-quality aggregate production.
          </li>
          <li>
            <span className="font-bold">Efficient Operations : </span>
            Minimal maintenance costs, reduced power consumption, and spacious
            feed opening.
          </li>
          <li>
            <span className="font-bold">Innovative Design : </span>
            Effortless throw setting adjustment and distinctive crushing
            chambers.
          </li>
          <li>
            <span className="font-bold">Consistent Quality : </span>
            Guaranteed product quality and shape with maximized capacity.
          </li>
          <li>
            <span className="font-bold">Dust Seal System : </span>
            Ensures internal component safety, minimizing maintenance expenses.
          </li>
          <li>
            <span className="font-bold">
              Industry-Leading Production Rates :{" "}
            </span>
            Achieve unmatched efficiency with Forcon Infra's crushers.
          </li>
        </ul>
        {/* <p className=" georgia-regular text-[18px] lg:text-justify">Forcon Infra leads the charge in revolutionizing the mining and construction industries, delivering state-of-the-art crushers renowned for their ability to produce superior-quality aggregate with unmatched efficiency. Our crushers boast easy maintenance, minimal operational costs per ton, reduced power consumption, and a spacious feed opening to optimize performance. Featuring innovative designs for effortless throw setting adjustment and distinctive crushing chambers, we guarantee consistent product quality and shape while maximizing capacity. Moreover, our dust seal system safeguards internal components, minimizing maintenance expenses and achieving industry-leading production rates.</p> */}
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
        <Table data={projectFour} headings={headings} />
      </div>
    </div>
  );
};

export default Crushers;
