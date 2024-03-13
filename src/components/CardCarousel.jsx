import { useState, useEffect } from "react";
import Card from "./Card";
import ImageOne from "../assets/img/slide-img1.jpg";
import ImageTwo from "../assets/img/slide-img2.jpg";
import ImageThree from "../assets/img/slide-img3.jpg";
import ImageFour from "../assets/img/slide-img4.jpg";
import ImageFive from "../assets/img/slide-img5.jpg";
import ImageSix from "../assets/img/slide-img6.jpg";
import ImageSeven from "../assets/img/slide-img7.jpg";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardData = [
    {
      id: 1,
      img: ImageOne,
      desc: "International Cricket stadium for Municipal Corporation, Nashik",
    },
    {
      id: 2,
      img: ImageTwo,
      desc: "Sashugaram, All Ring Road, Tapovan, Nashik",
    },
    {
      id: 3,
      img: ImageThree,
      desc: "Pimpalgaon - Nashik - Gonde Section of NH-3, PUPs Vilholi, Nashik",
    },
    {
      id: 4,
      img: ImageFour,
      desc: "Stone Crusher Plant at Moho Post Chincholi, Taluka Sinnar, Nashik",
    },
    {
      id: 5,
      img: ImageFive,
      desc: "Bus depot at Sr no-246 near Nashik Road Railway Station, Nashik",
    },
    {
      id: 6,
      img: ImageSix,
      desc: "Six Laning of Pimpalgaon - Nashik - Gonde Section of NH-3, Ozar Nashik",
    },
    {
      id: 7,
      img: ImageSeven,
      desc: "ASE Bund At More Tembe, Taluka & District: Ratnagiri",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentIndex, cardData.length]);

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
          <CiSquareChevLeft size={20} />
        </button>
        <div className="flex gap-4">
          {getDisplayCards().map((card) => (
            <Card key={card.id} cardData={card} />
          ))}
        </div>
        <button
          onClick={handleClickRight}
          className="ml-2 bg-gray-200 px-4 py-2 rounded-md focus:outline-none"
        >
          <CiSquareChevRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
