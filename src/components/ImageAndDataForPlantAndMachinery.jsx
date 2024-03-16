import React from "react";

const ImageAndDataForPlantAndMachinery = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-col gap-4 items-center justify-center mt-4 w-full lg:gap-8 ">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col  items-center justify-center  lg:w-full lg:gap-4 ${
            index === 0 ? "" : "border-t-4 pt-8"
          } ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} `}
        >
          <div className="mb-4 lg:mb-0 lg:w-[30%] flex items-center justify-center ">
            <img
              src={item.img || "https://picsum.photos/200/300"}
              alt=""
              className="lg:w-[90%] rounded-md
               object-cover "
            />
          </div>
          <div className="text-left lg:w-[70%] flex flex-col items-start justify-center">
            {item.text.map((para, index) => (
              <div key={index} className="">
                {index === 0 ? (
                  <h3 className="text-2xl tienne-bold mb-2 font-tienne text-tableheadcolor">
                    {para}
                  </h3>
                ) : (
                  <React.Fragment>
                    {para.includes("-") ? (
                      <p className="text-[18px] mb-2 georgia-regular">
                        <strong>{para.split(" - ")[0].trim()} </strong>-{" "}
                        {para.split(" - ").slice(1).join(" - ").trim()}
                      </p>
                    ) : (
                      <p className="text-xl mb-2">{para}</p>
                    )}
                  </React.Fragment>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageAndDataForPlantAndMachinery;
