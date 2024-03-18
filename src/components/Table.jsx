import React from "react";

const Table = ({ headings, data }) => {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl  py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden  border-gray-200 rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-tableheadcolor text-white">
                    <tr>
                      {headings.map((heading, index) => (
                        <th
                          key={index}
                          scope="col"
                          className="px-4 py-3.5 text-left text-[14px] border font-medium  font-tienne"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 georgia-regular">
                    {data.map((item, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                      >
                        {Object.keys(item).map((key, index) => (
                          <td
                            key={index}
                            className="px-4 py-2 border capitalize text-[14px]   "
                          >
                            { item[key] }
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Table;
