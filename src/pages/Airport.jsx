import React from "react";
import Breadcrumb from "../components/BreadCrumb";

const data = [
  {
    projects: [
      {
        name: "Airport Boundary Wall			",
        department: "MADCL",
        value: "9.25",
        status: "Completed",
      },
    ],
  },
];

const Airport = () => {
  return (
    <>
      <section className="py-8 px-8 lg:px-24">
        <div className="mb-8">
          <Breadcrumb values={["Home", "Verticals", "Airports"]} />
        </div>
        <div className="">
          <div>
            <p className="text-justify georgia-regular text-[18px]">
              Forcon Infra stands as a cutting-edge firm specializing in airport
              infrastructure development and timely project delivery. Our
              expertise extends to constructing runways, taxiways and other
              vital airport facilities. Forcon Infra also prioritizes safety and
              sustainability, ensuring that our projects are secure and
              eco-friendly.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col ">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-tablesubheadingcolor">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white font-tienne"
                      >
                        <span>Type Of Project</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-medium text-white font-tienne"
                      >
                        Department
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white font-tienne"
                      >
                        Sum of Project Value in Crore
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white font-tienne"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((dept) => (
                      <React.Fragment key={dept.department}>
                        {dept.projects.map((employee) => (
                          <tr key={employee.name}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium georgia-regular ">
                                    {employee.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm georgia-regular">
                                {employee.department}
                              </div>
                            </td>

                            <td className="  px-2 text-xs font-semibold georgia-regular ">
                              {employee.value}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 georgia-regular">
                              {employee.status}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
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

export default Airport;
