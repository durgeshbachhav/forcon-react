import React from "react";
import EXPERTISE from "../assets/img/us1.png";
import DEDICATION from "../assets/img/us2.png";
import CUSTOMER from "../assets/img/us3.png";
import SUSTAINABILITY from "../assets/img/us4.png";
import USPs from "../assets/img/us5.png";
import MANAGEMENT from "../assets/img/us6.png";

const AccordionComponent = () => {
  return (
    <div className="py-12 lg:px-8  bg-primary">
      <div className="space-y-2 px-8 lg:px-12">
        <h1 className="font-tienne tienne-bold text-2xl lg:text-3xl text-white">
          Excellence in People, Planning and Processes
        </h1>
        <h5 className="font-tienne text-xs lg:text-xl text-white py-2">
          At Forcon Infra, we believe in establishing enduring relationships
          with the government and businesses based on trust, honesty, and
          openness.
        </h5>
        <AccordionItem
          image={EXPERTISE}
          title="EXPERTISE"
          content="Over 25+ years in civil works like Roads, Flyovers, Buildings, Marines, Dams, RCC Pipelines and Drainage project."
        />
        <AccordionItem
          image={DEDICATION}
          title="DEDICATION TO QUALITY"
          content="Remarkable achievements in providing engineering construction and service expertise with added value."
        />
        <AccordionItem
          image={CUSTOMER}
          title="CUSTOMER SATISFACTION"
          content="Our foremost focus is on our clients, and we are dedicated to delivering outstanding service and support to them."
        />
        <AccordionItem
          image={SUSTAINABILITY}
          title="SUSTAINABILITY"
          content="We are committed to sustainability, we utilise well-maintained machinery to minimise both noise and air pollution."
        />
        <AccordionItem
          image={USPs}
          title="DISTINGUISHED USPs"
          content="Expert and seasoned personnel, along with advanced plant and machinery, enhance the quality, cost-effectiveness, and management of our projects."
        />
        <AccordionItem
          image={MANAGEMENT}
          title="PROJECT MANAGEMENT"
          content="Our management team is highly skilled, adept in project management, and consistently achieves on-time delivery."
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ image, title, content }) => {
  return (
    <details className="group bg-secondary rounded-md ">
      <summary className="flex items-center justify-between p-4 cursor-pointer outline-none group-open:bg-uicolor group-open:text-red rounded-md hover:bg-uicolor   ">
        <div className="flex items-center justify-center gap-2">
          <img src={image} className="w-8 h-8" alt="" />
          <span className="text-lg font-semibold sm:text-xl md:text-xl lg:text-xl text-white font-tienne">
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
      <div className="px-4 pb-4">
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white py-2 georgia-regular">
          {content}
        </p>
      </div>
    </details>
  );
};

export default AccordionComponent;
