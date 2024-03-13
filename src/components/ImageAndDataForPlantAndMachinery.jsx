import React from "react";

const ImageAndDataForPlantAndMachinery = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-col gap-8 items-center justify-center">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col lg:flex-row items-center justify-center">
          <div className="mb-4 lg:mb-0">
            <img
              src={item.img || "https://picsum.photos/200/300"}
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-left">
            {item.text.map((para, index) => (
              <p key={index} className="text-base mb-2">
                {para}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageAndDataForPlantAndMachinery;
