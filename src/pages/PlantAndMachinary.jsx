import Breadcrumb from "../components/BreadCrumb";
import Table from "../components/Table";
import Tractor from "../plantAndMachinery_json_data/Tractor.json";
import rmc from "../plantAndMachinery_json_data/rmc.json";
import Concreate from "../plantAndMachinery_json_data/Concreate.json";
import Hyva from "../plantAndMachinery_json_data/hyva.json";
import waterTanker from "../plantAndMachinery_json_data/waterTanker.json";
import Bouzer from "../plantAndMachinery_json_data/Bouzer.json";
import Tochan from "../plantAndMachinery_json_data/TOCHAN.json";
import Diesel from "../plantAndMachinery_json_data/DIESELvan.json";
import Bolero from "../plantAndMachinery_json_data/boleroCamper.json";
import Loader from "../plantAndMachinery_json_data/Loader.json";
import Roller from "../plantAndMachinery_json_data/Roller.json";
import Grader from "../plantAndMachinery_json_data/Grader.json";
import Paver from "../plantAndMachinery_json_data/PAVER.json";
import Farana from "../plantAndMachinery_json_data/FARANA.json";
import Excavator from "../plantAndMachinery_json_data/EXCAVATOR.json";
import DgSet from "../plantAndMachinery_json_data/Dgset.json";
import Bitemen from "../plantAndMachinery_json_data/bitemenPlant.json";
import washPlant from "../plantAndMachinery_json_data/washPlant.json";
import wmmPlant from "../plantAndMachinery_json_data/wmmPlant.json";

const PlantAndMachinary = () => {
  const data = [
    { title: "RMC", content: rmc },
    { title: "Concreate Pump", content: Concreate },
    // { title: "Hyva Tipper", content: Hyva },
    // { title: "Water Tanker", content: waterTanker },
    // { title: "Bouzer", content: Bouzer },
    // { title: "TRAILER", content: Tochan },
    // { title: "Diesel Van", content: Diesel },
    // { title: "Bolero Camper", content: Bolero },
    { title: "Loader", content: Loader },
    { title: "Rollers", content: Roller },
    { title: "Grader", content: Grader },
    { title: "Paver", content: Paver },
    // { title: "Farana Crane", content: Farana },
    // { title: "Tractor", content: Tractor },
    { title: "Excavator", content: Excavator },
    { title: "DG Set", content: DgSet },
    { title: "Bitumen Plant", content: Bitemen },
    { title: "Wash Plant", content: washPlant },
    { title: "WMM Plant", content: wmmPlant },
  ];
  const headings = [
    "Sr No",
    "Machine Name",
    "Machine Code/Name",
    "Model",
    "Capacity",
  ];

  return (
    <div className="py-8 px-8 lg:px-20">
      <div className="flex flex-col items-start justify-center">
        <Breadcrumb values={["Home", "Plant & Machinery"]} />
        <h2 className="text-2xl font-bold mt-8 font-tienne  lg:text-3xl text-tableheadcolor">
          Plant and Machinery
        </h2>
        <p className=" georgia-regular text-[18px] my-4 lg:my-10 lg:text-justify">
          At Forcon Infra, we recognize the significance of using appropriate
          tools and machinery for any infrastructure or construction project. We
          have made significant investments in a wide range of modern and
          cutting-edge plant and machinery. Our fleet consists of the most
          recent models of excavators, bulldozers, loaders, cranes, and other
          specialized equipment, all of which are maintained to the highest
          standards.
        </p>
      </div>
      <div>
        {/* <ImageAndDataForPlantAndMachinery data={data} /> */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
          {data?.map((vehicle, index) => (
            <div key={index} className=" w-full">
              <AccordionForVehicle
                title={vehicle.title}
                data={vehicle.content}
                headings={headings}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccordionForVehicle = ({ title, data, headings }) => {
  return (
    <details className="group  rounded-md bg-secondary shadow-md">
      <summary className="flex items-center justify-between p-4 cursor-pointer outline-none group-open:bg-tableheadcolor group-open:text-red group-open:rounded-t-md rounded-md hover:bg-primary  group-open:shadow-md ">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-semibold sm:text-xl md:text-xl lg:text-xl  font-tienne text-white">
            {title}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-white group-open:rotate-180"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </summary>
      <div className="px-4 pb-4 group-open:bg-white rounded-b-md">
        <p className="text-base sm:text-lg md:text-xl lg:text-xl  py-2 georgia-regular">
          <Table data={data} headings={headings} />
        </p>
      </div>
    </details>
  );
};

export default PlantAndMachinary;
