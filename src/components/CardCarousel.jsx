import { useState } from "react";
import Card from "./Card";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    { id: 1, img: "https://picsum.photos/200/300", desc: "Card 1" },
    { id: 2, img: "https://picsum.photos/200/300", desc: "Card 2" },
    { id: 3, img: "https://picsum.photos/200/300", desc: "Card 3" },
    { id: 4, img: "https://picsum.photos/200/300", desc: "Card 4" },
    { id: 5, img: "https://picsum.photos/200/300", desc: "Card 5" },
  ];

  const handleClickLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const handleClickRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getDisplayIndex = (index) => {
    return (index + cardData.length) % cardData.length;
  };

  const getDisplayCards = () => {
    const displayIndex = getDisplayIndex(currentIndex);
    return [
      cardData[getDisplayIndex(displayIndex - 1)],
      cardData[displayIndex],
      cardData[getDisplayIndex(displayIndex + 1)],
    ];
  };

  return (
    <div className="w-full overflow-hidden flex justify-center items-center">
      <div className="flex items-center justify-center">
        <button
          onClick={handleClickLeft}
          className="mr-2 bg-gray-200 px-4 py-2 rounded-md focus:outline-none"
        >
          Left
        </button>
        <div className="flex">
          {getDisplayCards().map((card) => (
            <Card key={card.id} cardData={card} />
          ))}
        </div>
        <button
          onClick={handleClickRight}
          className="ml-2 bg-gray-200 px-4 py-2 rounded-md focus:outline-none"
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
