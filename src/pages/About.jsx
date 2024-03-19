import React from "react";
import ImageAndData from "../components/ImageAndData";
import aboutImage from "../assets/img/Jpeg/5.jpg";
import CoreImage from "../assets/img/Info1.jpg";
import DirectorImage from "../assets/img/director.jpg";
import VisionMissionValues from "../components/VisionMissionValues";
import Breadcrumb from "../components/BreadCrumb";

const About = () => {
  const data = {
    img: aboutImage,
    text: [
      "Bringing Your Ideas and Innovations to Life",
      "Forcon Infra, formerly known as B. P. Sangle Constructions Pvt. Ltd., has a long and distinguished history in the infrastructure industry. Founded in 1984 as a stone crushing venture by Mr. Punjaji Nana Sangle, we quickly expanded our operations and registered as a government contractor, executing our first Asphalt Road Project for PWD. From the very beginning, our aim has been to establish ourselves as the most renowned and reliable infrastructure company in the industry, and we have been working tirelessly to achieve this goal ever since.",
      "Our commitment to excellence was recognized in 2004, when we received an award for excellent work in the Simhastha Kumbh Mela. Throughout the years, we continued to reach new heights and milestones, including a turning point in 2009 when we established a new venture of Automatic Vibro Casting Pipe. Another significant milestone was achieved in 2012 when we ventured into the RMC Business, which has become an integral part of our business today. In 2015, we were awarded the first 123 km of National Highway Project in BEED District, which paved the way for our success.",
    ],
  };

  return (
    <div className="">
      {/*  */}
      <div className="mt-8 px-8 lg:px-24">
        <Breadcrumb values={["Home", "About Us"]} />
      </div>
      <div className="py-12">{<ImageAndData data={data} />}</div>
      {/*  */}
      <div className="py-8 px-8 lg:px-24 text-gray-300  text-xl bg-primary">
        <p className="lg:text-justify georgia-regular mb-4">
          In addition to these accomplishments, we successfully completed the
          First Police Housing Project In Dhule in 2018, a testament to our
          commitment to quality and customer satisfaction. Our endless efforts
          were recognized with an award for excellent contribution to the
          development of infrastructure for NHAI Project.
        </p>
        <p className="lg:text-justify georgia-regular">
          Our company's name, Forcon, represents our commitment to hard work,
          stability, and a strong forward thrust. By providing robust and
          dependable infrastructure solutions, we believe we can contribute to
          the development of a more promising future for our clients and the
          communities we serve.
        </p>
      </div>
      {/*  */}
      <div className="py-8 px-8 flex flex-col items-center justify-center gap-2 lg:px-24 ">
        <h1 className="text-black text-xl lg:text-4xl font-bold py-2 mb-4 text-center font-tienne">
          Our Core Competency
        </h1>

        <img src={CoreImage} alt="CoreImage" className="lg:w-[80%]" />
      </div>
      {/*  */}
      <div className="bg-primary">
        <VisionMissionValues />
      </div>
      {/*  */}
      <div className="w-full py-8 px-8 lg:px-24 flex flex-col items-center justify-center lg:flex-row lg:gap-8 lg:justify-between gap-4">
        <div className="lg:w-[40%]">
          <img
            src={DirectorImage}
            alt="Director"
            className="w-full lg:w-auto rounded-md"
          />{" "}
          {/* Apply Tailwind CSS class for responsive image */}
        </div>
        <div className="lg:w-[60%] ">
          {" "}
          {/* Limit the width of the content on larger screens */}
          <h2 className="text-2xl  font-bold mb-4 text-justify font-tienne lg:text-3xl">
            Director Desk:
          </h2>{" "}
          {/* Apply appropriate text styles */}
          <p className="text-base text-justify georgia-regular">
            {" "}
            {/* Apply appropriate text styles */}
            “Our vision is to make your living better, with assured quality.
            Forcon is built on the pillars of endurance, sustainability,
            advancement and evolution. Forcon is devised to make a difference
            and satisfy the customers.” We aspire to provide the best products
            and services at the most affordable price while meeting all
            deadlines and quality standards in order to accomplish the project's
            objectives in the most convenient and stress-free manner. The
            application of methodical planning, execution, management and
            monitoring processes by the company's customer-facing teams enable
            them to achieve the best possible results. Under no circumstances do
            we ever compromise on the quality of our deliverables. Since we are
            assisting in the development of the nation's infrastructure, we
            assume responsibility for the deliverables to continue serving many
            more future generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
