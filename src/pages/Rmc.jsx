import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import ProductPortFolio from "../components/ProductPortFolio";

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
    },
    {
      Heading: "FlowCon",
      content: [
        "FlowCon is special concrete, produced by using high quality latest generation super plasticizers and viscosity modifying agents that gives it a unique self-compacting feature, which in turn allows complicated, intricate and elegant design without leaving any voids.",
        "FlowCon's innovative self-compacting properties not only ensure excellent flowability and workability but also eliminate the need for excessive vibration during placement, reducing labour costs and construction time. FlowCon delivers exceptional performance, reliability, and ease of use, enhancing efficiency and quality in every project.",
      ],
    },
    {
      Heading: "FibreCon",
      content: [
        "FibreCon is an enhanced crack resistant and relatively ductile concrete, produced by using various types of fibres like polyster, polypropylene, glass, steel, etc. that minimize the problems of plastic shrinkage cracks of the concrete in the plastic stage and substantially increases its static and dynamic properties like flexural impact and tensile strength.",
        "FibreCon's superior crack resistance and enhanced durability make it an ideal choice for demanding applications such as Trimix flooring and slab construction, ensuring long-lasting performance and structural integrity even under heavy loads and harsh environmental conditions.",
      ],
    },
    {
      Heading: "ThermoCon",
      content: [
        "ThermoCon is a special concrete, produced by using chilled water/ice which helps to control the temperature of the concrete and maintaining it within the acceptance criteria.  The other ingredients used in this concrete are also thermally controlled to bring down the temperature within the limits at the time of placing. This reduces the effect of high temperature and helps is minimizing shrinkage cracks, faster drying of concrete, formation of cold joint, etc.",
        "Its ability to maintain optimal temperatures during placement and curing accelerates construction timelines while guaranteeing superior quality and durability, making ThermoCon the preferred choice for critical infrastructure projects.",
      ],
    },
    {
      Heading: "LightCon",
      content: [
        "LightCon is a special concrete, produced by using composite material consisting of Portland cement, aggregates, porous fillers, and modifying agents. Its density varies from 800 to 1500kg/m3.",
        "It is suitable for non-load bearing elements such as insulating materials for roofts, floors and electrical cables.In addition to its lightweight properties, LightCon offers excellent thermal and acoustic insulation, making it an ideal choice for applications where energy efficiency and sound attenuation are paramount.",
      ],
    },
    {
      Heading: "ColourCon",
      content: [
        "ColourCon is a colourful concrete that provides the liberty to architects to explore their vision and bring variety in the treatment of various elements of a building. It is available in various shades and colours. It is relatively maintenance free as compare to bricks, pavers, cobbies, etc.",
        " ColourCon's durable and weather-resistant properties ensure long-lasting vibrancy, making it an ideal choice for decorative applications in both indoor and outdoor settings. Its versatility allows architects and designers to create visually striking elements, adding aesthetic value to any project while maintaining low maintenance requirements.",
      ],
    },
  ];

  return (
    <div className="py-8 px-8 lg:px-24">
      <section className="w-full ">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Rmc"]} />
        </div>
        <div className="">
          <p className="text-[18px] text-justify georgia-regular">
            Forcon Infra boasts cutting-edge technology with state-of-the-art
            laboratories and fully automated batching plants, offering a total
            installed capacity of 120 cubic metres per hour. Strategically
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
            truckload, fulfilling each order to meet our customers' demands.
          </p>
        </div>

        {/* add table */}
        <div>
          <h2 className="font-tienne text-2xl py-8 text-tableheadcolor">
            Product Portfolio
          </h2>
          <h5 className="georgia-regular text-xl mb-4">
            Aggregates & Building Materials
          </h5>
          {projectPortfolio.map((item, index) => (
            <ProductPortFolio
              key={index}
              heading={item.Heading}
              content={item.content}
            />
          ))}
        </div>
        <div>
          <h2 className="georgia-regular text-xl mb-4 mt-8 text-tableheadcolor">
            Our Special Products
          </h2>
          {ourSpecialProject.map((item, index) => (
            <ProductPortFolio
              key={index}
              heading={item.Heading}
              content={item.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rmc;
