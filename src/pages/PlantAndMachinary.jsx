import ImageAndDataForPlantAndMachinery from "../components/ImageAndDataForPlantAndMachinery";
import crusherImage from "../assets/img/1.png";
import HotMixPlant from "../assets/img/hot-mix-plant.jpg";
import rmcPlant from "../assets/img/mix-plant.jpg";
import weightPlant from "../assets/img/weight-plant.jpg";
import concreateEquipment from "../assets/img/concrete-equipment.jpg";
import transportEquipment from "../assets/img/transportation-equipment.jpg";
import constructionEquipment from "../assets/img/2.png";
import rollars from "../assets/img/roller.jpg";
import povers from "../assets/img/Pavers.jpg";
import Laboratory from "../assets/img/Laboratory.jpg";
import surveyEquipment from "../assets/img/survey-equipment.jpg";
import otherEquipment from "../assets/img/other-machinery.jpg";
import Breadcrumb from "../components/BreadCrumb";

const PlantAndMachinary = () => {
  const data = [
    // crushers plant
    {
      img: crusherImage,
      text: [
        "Crushers:",
        "3 Stage Crusher Plants - We use four high-performance 3 stage crusher plants, equipped with all standard machines for optimal productivity. Our best choices are the 300 TPH capacity Sandvik Asia Pvt Ltd Crusher, the 200 TPH capacity Puzzolana Machinery Fabricators (Hyderabad) LLP’s Crusher, the 200 TPH capacity Singh Engineering’s Crusher and the 150 TPH capacity Akashganga Constructional Machines P. Ltd.’s Crusher.",
        "Mesto NW106 / NW220 GDP Portable Crusher Plant - We use high quality wheel-mounted rock crushing devices designed for the first stage of crushing. Both hard rock and nut form rocks, as well as recycled items, can be crushed.",
      ],
    },
    // hot mix plant
    {
      img: HotMixPlant,
      text: [
        "Hot Mix Plant:",
        "160 TPH Batch Type Stationary Asphalt Mixing Plant & 400 KVA D.G. Set - We use Kaushik Engineering Works’ Asphalt Mixing Plant which is ideal construction equipment utilized for manufacturing asphalt, through batch mixing, for constructing roads.",
        "Drum Mix Asphalt Plant & 200 KVA - We use high quality, durable and long-lasting Apollo’s asphalt mixtures Drum Mix Asphalt Plant & 200 KVA, which facilitates fuel efficiency, low carbon footprint and environment protection.",
      ],
    },
    // rmc plant
    {
      img: rmcPlant,
      text: [
        "RMC Plant:",
        `Commerical - Total install capcity 120 sqaure meter per hour. Fully automated batching plant with latest technology, twin shaft, mixer, schwing Stetter and Allen buildwell.
        Line Pump: We jhave in total 3 line pumps, which has pouring capcity upto 25 floor Schwing stetter Aquerous.`,
        `Concrete - Concrete mixer , we have total fleet of 20 transit mixer with capcity of 8 cubic meters, 7 cubic meters and 6 cubic meter of carriage capcity.

        `,
        `RMC product: M10-M60 - grade of concrete for coventional as well as customized construction application.`,
      ],
    },
    // weight plant
    {
      img: weightPlant,
      text: [
        "Weight Mix Plant:",
        "For large scale construction projects, we choose the Ammann Apollo Pvt Ltd.’s 200 TPH capacity Weight Mix Plant for efficient and reliable production of high quality concrete.",
      ],
    },
    // concreateEquipment
    {
      img: concreateEquipment,
      text: [
        "Concrete Equipment:",
        `Concrete Boom Pump S36X - We use the Schwing Stetter India Pvt Ltd’s 36 mtr Concrete Boom Pump, as it provides precise concrete placement which is important for the complex structures we are known for. With a 36-meter vertical reach and 32-meter horizontal reach, it is a particular kind of mobile concrete pump that can cover a huge region.
        `,
        `Concrete Transit Mixer - We use 10 Concrete Transit Mixers, made by Bharat Benz Leyland and AMW-Schwing Stetter with a capacity of 6 and 8 Cum.`,
        `Concrete Mixer - We have 3 Kirloskar’s (Universal Sales Corporation) Concrete Mixer with 6 H.P which drives the mixing drum to ensure efficient and consistent mixing of concrete.
        `,
        `Concrete Pump - We use 2 of Schwing Stetter’s Concrete Pumps of 100 MT capacity to handle high volumes of concrete, as it is a safe and reliable option for high quality.`,
      ],
    },
    // transportEquipment
    {
      img: transportEquipment,
      text: [
        "Transportation Equipment:",
        "Transportation equipment offers a high amount of reliability and ease for transit and mobility of various machines, materials and more. The list of the transportation equipment we use are:",
        `21 of Ashok Leland and Tata’s Hyawa (Tipper)-  7.5 / 9.5 Cum Capacity,

3 Asphalt Bowser - 9 Ton Capacity,

2 Allwin Equipment and Jadish Industries - 6 MT, 4 MT Capacity,

4 Tata Water Tankers - 10,000 Ltr Capacity,

2 Mahindra 9 Seater Jeeps,

1 Mahindra Bolero Camper Utility Van,

4 HMT and Mahindra Tractors - 3511 275 DI Capacity`,
      ],
    },
    // construction equipment
    {
      img: constructionEquipment,
      text: [
        "Construction Equipment:",
        `Excavator (Poclain) - For best use on construction sites, we use Tata Hitachi, JCB India Ltd, Hyundai, L&T, Cobalco’s 6 excavators of various capacities to operate in a range of environments, including construction sites, mines, and quarries.`,
        `Hydraulic Breaker - When it comes to powerful and strong equipment, we choose Atlas Copco's 3 Hydraulic Breakers for breaking concrete, asphalt, rocks and other materials.`,
        `Backhoe Loader - For both digging and loading tasks on construction sites, we use Escorts Delhi JCB India and Terex Vectra’s 10 Backhoe Loaders of 3 DX Capacity.`,
        `Loader - For medium sized-jobs, we use Caterpillar India Pvt Ltd and GMMCO Ltd’s 1.7 cum capacity loaders, which are used for a range of tasks, including loading and unloading trucks, grading roads, and excavating foundations.`,
        `Motor Grader - For even grading and leveling the surface, we use Caterpillar India Pvt Ltd and BEML’s Motor Graders of capacity 605 R2 for its moderate to heavy load.`,
      ],
    },
    // rollars
    {
      img: rollars,
      text: [
        "Rollers:",
        `Vibratory Roller / Soil Compactor - To compact soil and gravel in road construction projects, create a stable base for building foundations, and smooth out asphalt in parking lots and driveways, we use 10 Rollers of 28 Ton from Ingersoll-Rand, L&T, JCB-VM-115, Volvo-DD100.`,
        `Road Rollers - In our road construction and maintenance projects, we use 6 Road Rollers from Singh Quarry, Britannia and JCB of capacity 8 to 10 MT.`,
      ],
    },
    //povers
    {
      img: povers,
      text: [
        "Pavers:",
        `Apollo Make 9 Meter Paver - In road construction and maintenance projects, for laying asphalt on roads, pavements, and other areas, we use Apollo Industries Ltd’s 9 Meter Paver.`,
        `Sensor Leveling Paver Finisher - We use technologically advanced Sensor Leveling Paver Finisher from Jagdish Industries & Unipave for precision and accuracy.`,
        `Paver Finisher - To lay different types of asphalt, including hot mix, warm mix, and cold mix, we use the Unipave, Maruti and United’s 60 TPH Capacity Paver Finishers.`,
      ],
    },
    // Laboratory Equipment:
    {
      img: Laboratory,
      text: [
        "Laboratory Equipment:",
        `Modern Lab (Bitumen) - We use cutting-edge laboratory equipment from Techno Lab to analyze the quality of bitumen, which is a key component in road construction. It helps to measure the bitumen with high precision, along with determining parameters such as penetration, softening point, ductility, and flash point, which are all crucial in determining the quality of bitumen.`,
        `Modern Lab (Concrete) - We use state-of-the-art lab equipment from Techno Lab to analyze the quality of concrete.`,
      ],
    },
    //Survey Equipment:
    {
      img: surveyEquipment,
      text: [
        "Survey Equipment:",
        `Total Station - To precisely measure the distances and angles of our construction projects, we place our trust in 5 Paragon Instrument’s Total Stations with a capacity of TS-635.`,
        `Auto-level - As another measurement equipment, we use 20 of Nikon’s Auto Levels, as it is a sureshot mark of accuracy, which makes it reliable with robust construction that ensures it can withstand the rigors of field use.`,
        `Theodolite - Another of our survey tools is Universal’s Theodolites - whose ability to measure angles and distances with a high level of precision is very important on the field.`,
        `Dumpy Level - To measure the difference between height and distance appropriately, we use Universal’s Dumpy Levels, which, because of its simplicity, is very easy for laymen to understand and include in their work.`,
      ],
    },
    // other equipment
    {
      img: otherEquipment,
      text: [
        "Other Machinery :",
        `Other than the ones mentioned above, we also use some general equipment and tools, such as 2 Cranes from Escorts and Farana, of capacity 14 and 15 Ton each, and 5 Kirloskar and Western Consolidated Pvt Ltd.’s Diesel Generator Sets of 500 KVA, 400 KVA and 200 KVA capacities.

        `,
      ],
    },
  ];
  return (
    <div className="py-8 px-8 lg:px-20">
      <div className="flex flex-col items-start justify-center">
        <Breadcrumb values={["Home", "Plant & Machinery"]} />

        <h2 className="text-2xl font-bold mt-8 font-tienne  lg:text-3xl text-tableheadcolor">
          Plant and Machinery
        </h2>
        <p className="text-justify georgia-regular text-[18px] my-4 lg:my-10">
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
        <ImageAndDataForPlantAndMachinery data={data} />
      </div>
    </div>
  );
};

export default PlantAndMachinary;
