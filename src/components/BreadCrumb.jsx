import React from "react";
import { Home, ChevronRight } from "lucide-react";

const Breadcrumb = ({ values }) => {
  console.log(values);
  return (
    <nav className="flex " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 georgia-regular">
        {values?.map((value, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && <ChevronRight className="h-4 w-4" />}
            <a
              href="/"
              className={`ml-1 inline-flex text-base font-medium font-tienne text-black hover:text-blue-400  ${
                index !== 0 ? "md:ml-2 " : ""
              }`}
            >
              {index === 0 ? (
                <Home className="mr-5 h-5 w-5 text-wrap font-bold" />
              ) : null}
              {value}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
