const CrushersData = ({ projects }) => {
  // console.log("project", projects);
  const { additionalInfo, projectData } = projects;
  return (
    <div className="">
      <section className=" w-full max-w-7xl py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-xl font-bold font-tienne lg:text-2xl">
              {additionalInfo[0]?.heading}
            </h2>
            {additionalInfo[0]?.subHeading && (
              <p className="mt-1 text-base  georgia-regular">
                {additionalInfo[0]?.subHeading}
              </p>
            )}
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-tableheadcolor font-medium  font-tienne">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white"
                      >
                        <span>Sr. No</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-medium text-white"
                      >
                        VSI Product
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white"
                      >
                        HIS Product
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-medium text-white"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {projectData.map((project, index) => (
                      <tr key={index} className="georgia-regular">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm font-medium ">
                            {project.number}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm  ">{project.title}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-700">
                            {project.department}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {project.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrushersData;
