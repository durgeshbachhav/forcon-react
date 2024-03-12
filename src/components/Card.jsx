import React from "react";

const Card = (cardData) => {
     const { id, img, desc }=cardData;
     console.log('carddata',cardData)
  return (
    <div className="flex flex-row items-center justify-center">
      
        <div
          key={id}
          className="bg-white shadow-md rounded-md overflow-hidden"
        >
          <img src={img} alt="" className="w-full h-auto animate-pulse" />
          <div className="p-4">
            <p className="text-gray-800">{desc}</p>
          </div>
        </div>
     
    </div>
  );
};

export default Card;
