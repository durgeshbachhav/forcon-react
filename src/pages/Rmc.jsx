import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import ProductPortFolio from "../components/ProductPortFolio";
import Carousel from "../components/Carousel";
import images from "../carouselData/rmcCarousel";
import CollegeComponent from "../components/CollegeComponent";
import collegeImages from "../CollegeCompData/collegeImages";

const Rmc = () => {
  const projectPortfolio = [
    {
      Heading: "VSI Aggregates",
      content: [
        "VSI Aggregates are the most commonly used materials nowadays for almost every application of Concrete -Ready Mix Concrete as well as Site mix applications. The material is available in various shapes & sizes based on its application such as 20mm, 10mm & 6mm.",
        "Its unique shape and size gives a very good consistency in the concrete mix and the ultimate performance of the end application.",
        "This makes VSI Aggregates a preferred choice for a wide range of construction applications, from residential buildings to infrastructure projects, where quality and reliability are paramount.",
      ],
    },
    {
      Heading: "Non-VSI Aggregates",
      content: [
        "Non-VSI Aggregates are the widely used materials in the Construction Materials Segment for a variety of applications based on the need & requirement. The material is available in various shapes & sizes based on application such as 80mm, 60mm, 40mm.",
        "These aggregates are ideal for a wide range of applications, including road construction, foundation works, and landscaping projects, providing reliable and cost-effective solutions for various construction endeavours.",
      ],
    },
    {
      Heading: "Crushed Sand",
      content: [
        "Crushed sand also known as manufactured sand is widely used in construction materials as a substitute for natural sand. It is used in concrete and mortar mixtures to improve the workability, strength, and durability. Its consistent quality and particle size distribution make it a preferred choice for various construction applications.",
        "Furthermore, crushed sand offers environmental benefits by reducing the reliance on natural sand extraction, thus helping to preserve precious natural resources and mitigate the impact on ecosystems. Its uniform composition and adherence to industry standards ensure reliable performance, making it an environmentally sustainable and economically viable alternative for construction projects.",
      ],
    },
    {
      Heading: "Wash Sand",
      content: [
        "Washed sand is another type of manufactured sand that has been processed to remove impurities, such as clay, silt, and organic matter. This is typically done through a washing process that involves rinsing the sand with water to separate the unwanted materials. It's commonly used in concrete production, as a bedding material for pavers and bricks, in sandboxes, and for beach replenishment projects. ",
        "The washing process ensures that washed sand has better quality,  consistency, and drainage properties compared to unwashed sand.",
        "The superior quality and improved drainage properties of washed sand make it an essential component in various construction applications, guaranteeing optimal performance and durability for every project.",
      ],
    },
    {
      Heading: "Plaster Sand",
      content: [
        "Plaster sand is fine sand used in construction for plastering walls and ceilings. It's specifically graded and washed to ensure uniformity and cleanliness. Plaster sand is free of impurities like clay and silt, making it ideal for creating a smooth and durable plaster finish. It's commonly mixed with cement and water to create a plastering mortar that adheres well to surfaces and provides a solid base for painting or other finishes. Plaster sand is essential for achieving a high-quality plastering job with excellent adhesion and finish.",
        "Moreover, the precisely graded particles of plaster sand facilitate optimal bond strength between the plaster and the substrate, ensuring a long-lasting and aesthetically pleasing finish for both interior and exterior surfaces.",
      ],
    },
  ];

  const ourSpecialProject = [
    {
      Heading: "ExpressCon",
      content: [
        "ExpressCon is a special concrete, produced by using various blends of cementitious materials along with advanced quality super plasticizers. This results in the reinforcement of the micro-pore structure of the concrete leading to very dense, impervious and long-lasting structures.",
        "ExpressCon's unique formulation not only enhances the strength and durability of structures but also accelerates the curing process, making it ideal for projects requiring rapid turnaround times.",
      ],
      table: [
        {
          feature: "Accelerates critical sections of construction process",
          application: "Pavement & Trafficked roads",
        },
        {
          feature: "Reduced labour and equipment working hrs",
          application: "Pre-stressed concrete structures",
        },
        {
          feature:
            "Increased productivity due to quicker removal of frameworks",
          application: "Precast applications: Beams, Panel & Specific elements",
        },
        {
          feature:
            "Structure can put into intended use earlier	Tunnel & Subways",
          application: "Concrete casting using Aluform systems",
        },
        {
          feature:
            "Structure can put into intended use earlier	Tunnel & Subways",
          application: "	Temporary water control structures",
        },
        {
          feature:
            "Structure can put into intended use earlier	Tunnel & Subways",
          application: "	Climbing & Gliding framework systems",
        },
      ],
      headings: ["Key Feature", "Application"],
    },
    {
      Heading: "FlowCon",
      content: [
        "FlowCon is special concrete, produced by using high quality latest generation super plasticizers and viscosity modifying agents that gives it a unique self-compacting feature, which in turn allows complicated, intricate and elegant design without leaving any voids.",
        "FlowCon's innovative self-compacting properties not only ensure excellent flowability and workability but also eliminate the need for excessive vibration during placement, reducing labour costs and construction time. FlowCon delivers exceptional performance, reliability, and ease of use, enhancing efficiency and quality in every project.",
      ],
      table: [
        {
          feature:
            "Excellent quality in terms of surface finish; no honey combs, voids, etc. and hence, enhanced long-term durability.",
          application: "Retaining walls, raft, footings and pile foundations",
        },
        {
          feature:
            "Safer working environment due to less labour required on site during placement of concrete",
          application: "Repair, restoration and renewal of RCC structures.",
        },
        {
          feature:
            "Environmental friendly as, minimum vibration mitigates noise pollution",
          application: "RCC members with heavy and congested reinforcement",
        },
        {
          feature: "Better progress and speedy completion of project.",
          application:
            "RCC elements of intricate and complicated shape and design",
        },
      ],
      headings: ["Key Feature", "Application"],
    },
    {
      Heading: "FibreCon",
      content: [
        "FibreCon is an enhanced crack resistant and relatively ductile concrete, produced by using various types of fibres like polyster, polypropylene, glass, steel, etc. that minimize the problems of plastic shrinkage cracks of the concrete in the plastic stage and substantially increases its static and dynamic properties like flexural impact and tensile strength.",
        "FibreCon's superior crack resistance and enhanced durability make it an ideal choice for demanding applications such as Trimix flooring and slab construction, ensuring long-lasting performance and structural integrity even under heavy loads and harsh environmental conditions.",
      ],
      table: [
        {
          feature: "Reduced plastic settlement and plastic shrinkage cracking",
          application:
            "Concrete roads, beams and precast concrete girders which require additional flexural strength.",
        },
        {
          feature:
            "Increased durability as it improves toughness, flexural, fatigue and abrasion resistance",
          application:
            "Slab on grade: All types of concrete pavements, industrial floors, airport taxiways, hangers etc",
        },
        {
          feature: "Increased homogeneity and reduced bleeding",
          application:
            "Heavy traffic wearing surfaces such as warehouses, container yards, railway platforms etc.",
        },
        {
          feature:
            "Superior durability with high flexural and fatigue strength",
          application:
            "Water retaining structures like retaining walls, water tanks, hydel projects, ETPs, jetties and spillways",
        },
      ],
      headings: ["Key Feature", "Application"],
    },
    {
      Heading: "ThermoCon",
      content: [
        "ThermoCon is a unique concrete blend crafted with chilled water/ice to regulate temperature during production and placement. Its ingredients are thermally controlled to minimize high temperatures, reducing shrinkage cracks and accelerating drying.",
        "This ensures faster construction timelines and superior quality, making ThermoCon the top choice for critical projects.",
      ],
      table: [
        {
          feature:
            "Controls the temperature differential between the core and surface of the concrete, thereby mitigating thermal tensile cracks.",
          application: "Bridge Foundation & Bridge Piers",
        },
        {
          feature: "Reduced plastic shrinkage cracks in fresh concrete",
          application: "Large retaining walls",
        },
        {
          feature:
            "Rapid loss of slump and drying of fresh concrete is controlled",
          application: "Mass raft foundations and deep beams",
        },
        {
          feature: "Controlled early setting and stiffening of concrete",
          application:
            "Hydro-electric & power projects, mass concrete works in damss",
        },
      ],
      headings: ["Key Feature", "Application"],
    },
    {
      Heading: "LightCon",
      content: [
        "LightCon is a special concrete, produced by using composite material consisting of Portland cement, aggregates, porous fillers, and modifying agents. Its density varies from 800 to 1500kg/m3.",
        "It is suitable for non-load bearing elements such as insulating materials for roofts, floors and electrical cables.In addition to its lightweight properties, LightCon offers excellent thermal and acoustic insulation, making it an ideal choice for applications where energy efficiency and sound attenuation are paramount.",
      ],
      headings: ["Key Feature", "Application"],
      table: [
        {
          feature: "Reduction in structural dead load",
          application: "Roofs and floors as an insulating material",
        },
        {
          feature: "Excellent fire resistance properties",
          application:
            "Low strength filler material for variety of applications",
        },
        {
          feature:
            "Ease of handling & transportation.	Construction of partition walls",
          application: "Construction of partition walls",
        },
        {
          feature:
            "Free flowing - spreads to fill all voids, thus enabling faster work",
          application:
            "Low strength filler material for variety of applications",
        },
      ],
    },
    {
      Heading: "ColourCon",
      content: [
        "ColourCon offers architects the freedom to realize vibrant designs with its array of shades and colors. Its low-maintenance nature surpasses that of traditional materials like bricks and pavers. ",
        "With durability and weather resistance, ColourCon retains its vibrancy over time, perfect for decorative use indoors and out. Architects and designers can create visually stunning elements with ease, enhancing projects while minimizing upkeep.",
      ],
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-24">
      <section className="w-full ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "RMC"]} />
        </div>
        <div className="py-4">
          <h2 className="tienne-bold font-bold text-2xl text-tableheadcolor">
            Pioneering Precision: Forcon Infra's Advanced Concrete Solutions and
            Seamless Delivery
          </h2>
        </div>
        <Carousel images={images} title={false} />
        <div className="mt-10">
          {/* <p className="text-[18px]  georgia-regular lg:text-justify">
            Forcon Infra boasts cutting-edge technology with state-of-the-art
            laboratories and fully automated batching plants, offering a total
            installed capacity of 120 Cubic meters per hour. Strategically
            located in Sinnar and Nashik, our two independent fully commercial
            plants ensure efficient service delivery. Backed by a large fleet of
            high-capacity vehicles and concrete pumps, we seamlessly cater to
            the dynamic needs of multiple customers simultaneously. Our team
            comprises seasoned industry professionals with specialised expertise
            in the RMC field. We pride ourselves on delivering specially
            designed concrete tailored to achieve optimal strength and
            performance for every structure. With superior quality systems
            managing the end-to-end production process, coupled with expertise
            in dispatch and tracking, we guarantee on-time delivery of every
            truckload, fulfilling each order to meet our customer's demands.
          </p> */}
          <ul className="list-disc georgia-regular text-base lg:text-lg text-justify px-4">
            <li>
              We specialize in crafting custom concrete formulations
              meticulously tailored to meet the exacting demands of each
              structure, ensuring unparalleled strength and performance.
            </li>
            <li>
              At our cutting-edge fully automated batching plants, we
              meticulously produce Ready-Mix Concrete (RMC) with precision. Our
              advanced quality control systems oversee every aspect of the
              production process, ensuring excellence from start to finish.
            </li>
            <li>
              Utilizing our proficiency in dispatch and meticulous tracking
              systems, we guarantee punctual delivery of every truckload,
              fulfilling each order promptly to meet the exacting demands of our
              valued customers.
            </li>
            <li>
              Our comprehensive range of Ready-Mix Concrete (RMC) extends from
              Grade M7.5 to M60 and beyond, precisely tailored to match the
              specific structural requirements of each project.
            </li>
            <li>
              Delivering top-quality Ready-Mix Concrete (RMC) throughout Nashik,
              our strategically located plants in Sinnar and Nashik ensure swift
              and efficient distribution, catering to diverse construction needs
              with precision and reliability.
            </li>
          </ul>
        </div>
        {/* add table */}
        <div>
          <h1 className="font-tienne font-bold  py-8 text-tableheadcolor text-3xl">
            Product Portfolio
          </h1>
          <h3 className="georgia-regular text-xl mb-4 font-bold">
            Aggregates & Building Materials
          </h3>
          {projectPortfolio.map((item, index) => (
            <ProductPortFolio
              key={index}
              heading={item.Heading}
              content={item.content}
            />
          ))}
        </div>
        <div>
          <h1 className="font-tienne font-bold  mb-4 mt-8 text-tableheadcolor text-3xl">
            Our Special Products
          </h1>
          {ourSpecialProject.map((item, index) => (
            <ProductPortFolio
              key={index}
              heading={item.Heading}
              content={item.content}
              istable={true}
              table={item.table}
              tableheading={item.headings}
            />
          ))}
        </div>
        <div>
          <CollegeComponent collegeImages={collegeImages} />
        </div>
      </section>
    </div>
  );
};

export default Rmc;
