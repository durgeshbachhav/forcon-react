import React from "react";

const ProductPortFolio = ({ heading, content }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 ">
      <h3 className="text-xl font-semibold mb-2 font-tienne text-tablesubheadingcolor">
        {heading}
      </h3>
      <ul className="list-disc pl-4">
        {content?.map((item, index) => (
          <li key={index} className="mb-2 georgia-regular">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPortFolio;
