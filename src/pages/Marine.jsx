import React from "react";

const data = [
  {
    projects: [
      {
        name: "Marine Works",
        department: "MMB",
        value: "161.51",
        status: "Construction of Anti sea Bund at Mirya ta Dist Ratnagiri	",
      },
      {
        name: "Marine Works",
        department: "MMB",
        value: "93.56",
        status: "Construction of jetty and breakwater at Murud dist Raigad	",
      },
      {
        name: "Marine Works",
        department: "MMB",
        value: "68.89",
        status: "Construction of Groynes and Dredging at Mulgaon Dist Raigad",
      },
    ],
  },
];

const Marine = () => {
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p>
              At Forcon Infra, we construct colossal dams and implement
              state-of-the-art irrigation technology to revolutionize water
              management. Our unwavering commitment involves thorough planning,
              precise design, impeccable execution, and ongoing maintenance, all
              in adherence to industry standards.
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
                              {employee.status}
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

export default Marine;
