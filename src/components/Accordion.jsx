import React from "react";

const AccordionComponent = () => {
  return (
    <div className="py-12 lg:px-8  bg-accordion">
      <div className="space-y-2 mx-12">
        <AccordionItem
          title="EXPERTISE:"
          content="Over 20 years of experience in civil works like R.C.C pip"
        />
        <AccordionItem
          title="DEDICATION TO QUALITY:"
          content="Outstanding record of offering value-added engine"
        />
        <AccordionItem
          title="CUSTOMER SATISFACTION:"
          content="Our clients are our top priority, and we"
        />
        <AccordionItem
          title="SUSTAINABILITY:"
          content="We believe that sustainable infr"
        />
        <AccordionItem
          title="DISTINGUISHED USPs:"
          content="Our raw materials, plant and machinery improve construction quality, cost, and control."
        />
        <AccordionItem
          title="PROJECT MANAGEMENT:"
          content="We have skilled management, excellent project management, and on-time delivery."
        />
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  return (
    <details className="group bg-blue-300 rounded-md" open>
      <summary className="flex items-center justify-between p-4 cursor-pointer outline-none group-open:bg-blue-200 group-open:text-red rounded-md">
        <span className="text-lg font-semibold sm:text-xl md:text-xl lg:text-xl text-white">
          {title}
        </span>
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
        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-700 py-2">
          {content}
        </p>
      </div>
    </details>
  );
};

export default AccordionComponent;
