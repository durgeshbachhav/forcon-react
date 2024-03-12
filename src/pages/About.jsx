import React from "react";
import ImageAndData from "../components/ImageAndData";
import aboutImage from "../assets/img/about1.jpg";
import CoreImage from "../assets/img/Info1.jpg";
import DirectorImage from "../assets/img/director.jpg";
import VisionMissionValues from "../components/VisionMissionValues";

const About = () => {
  const data = {
    img: aboutImage,
    text: [
      "Bringing Your Ideas and Innovations to Life",
      "Forcon Infra, formerly known as B. P. Sangle Constructions Pvt. Ltd., has a long and distinguished history in the infrastructure industry. Founded in 1984 as a stone crushing venture by Mr. Punjaji Nana Sangle, we quickly expanded our operations and registered as a government contractor, executing our first Asphalt Road Project for PWD. From the very beginning, our aim has been to establish ourselves as the most renowned and reliable infrastructure company in the industry, and we have been working tirelessly to achieve this goal ever since.",
      "Our commitment to excellence was recognized in 2004, when we received an award for excellent work in the Sinhastha Kumbha Mela. Throughout the years, we continued to reach new heights and milestones, including a turning point in 2009 when we established a new venture of Automatic Vibro Casting Pipe. Another significant milestone was achieved in 2012 when we ventured into the RMC Business, which has become an integral part of our business today. In 2015, we were awarded the first 123 km of National Highway Project in BEED District, which paved the way for our success.",
    ],
  };
  return (
    <div>
      {/*  */}
      <div>{<ImageAndData data={data} />}</div>
      {/*  */}
      <div>
        <p>
          In addition to these accomplishments, we successfully completed the
          First Police Housing Project In Dhule in 2018, a testament to our
          commitment to quality and customer satisfaction. Our endless efforts
          were recognized with an award for excellent contribution to the
          development of infrastructure for NHAI Project.
        </p>
        <p>
          Our company's name, Forcon, represents our commitment to hard work,
          stability, and a strong forward thrust. By providing robust and
          dependable infrastructure solutions, we believe we can contribute to
          the development of a more promising future for our clients and the
          communities we serve.
        </p>
      </div>
      {/*  */}
      <div>
        <div>Our Core Competency:</div>
        <div>
          <img src={CoreImage} alt="CoreImage" />
        </div>
      </div>
      {/*  */}
      <VisionMissionValues />
      {/*  */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-8">
        <div>
          <img
            src={DirectorImage}
            alt="Director"
            className="w-full lg:w-auto"
          />{" "}
          {/* Apply Tailwind CSS class for responsive image */}
        </div>
        <div className="max-w-md lg:w-1/2">
          {" "}
          {/* Limit the width of the content on larger screens */}
          <h2 className="text-xl font-bold mb-4">Director Desk:</h2>{" "}
          {/* Apply appropriate text styles */}
          <p className="text-sm lg:text-base">
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
