import React from "react";
import Table from "./Table";

const ProductPortFolio = ({
  heading,
  content,
  istable,
  table,
  tableheading,
}) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 ">
      <h5 className="text-[18px] font-semibold mb-2 font-tienne text-tablesubheadingcolor">
        {heading}
      </h5>
      <ul className="list-disc pl-4">
        {content?.map((item, index) => (
          <li key={index} className="mb-2 georgia-regular">
            {item}
          </li>
        ))}
      </ul>
      {istable && <Table data={table} headings={tableheading} />}
    </div>
  );
};

export default ProductPortFolio;
