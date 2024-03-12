import React from "react";

const Building = () => {
  const data = [
    {
      department: "COMPLETED PROJECTS",
      projects: [
        {
          name: "Building",
          department: "NMC",
          shortName: "Bus Depot near Nashik Railway Station",
          value: "29.66",
        },
        {
          name: "Building",
          department: "PWD",
          shortName: "Construction of Boys Hostel at Bhaler dist Nandurbar",
          value: "10.56",
        },
        {
          name: "Building",
          department: "PWD",
          shortName:
            "Construction of Girls Hostel Building at Bhaler Dist Nandurbar",
          value: "10.78",
        },
        {
          name: "Building",
          department: "PWD",
          shortName: "Construction of Hospital at Shalimar Nashik",
          value: "16.02",
        },
        {
          name: "Building",
          department: "MHADA",
          shortName: "-",
          value: "07.02",
        },
      ],
    },
    {
      department: "ONGOING PROJECTS",
      projects: [
        {
          name: "Building",
          department: "EPI",
          shortName:
            "Construction of Residential School at Shahada Dist Nandurbar",
          value: "34.87",
        },
        {
          name: "Building",
          department: "PWD",
          shortName: "Construction of Krushi Bhawan Building at Nashik",
          value: "10.72",
        },
      ],
    },
  ];

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p>
              Forcon Infra stands as a preeminent leader in the field of highway
              and transportation infrastructure construction. Renowned for our
              unwavering commitment to quality, safety, and innovation, the
              company's exceptional team of engineers, architects, and
              construction specialists collaboratively strive to bring each
              project to fruition, setting new benchmarks for excellence.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Type Of Project</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Department
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Short Project Name
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        Sum of Project Value in Crore
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((dept) => (
                      <React.Fragment key={dept.department}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="col"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                          >
                            {dept.department}
                          </th>
                        </tr>
                        {dept.projects.map((employee) => (
                          <tr key={employee.name}>
                            <td className="whitespace-nowrap px-4 py-4">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900 ">
                                    {employee.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                              <div className="text-sm text-gray-900">
                                {employee.department}
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                              <span className=" whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                {employee.shortName}
                              </span>
                            </td>
                            <td className="  px-2 text-xs font-semibold ">
                              {employee.value}
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

export default Building;
