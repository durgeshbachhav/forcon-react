import { useState, useEffect } from "react";

import ImageOne from "../assets/img/slide-img1.jpg";
import ImageTwo from "../assets/img/slide-img2.jpg";
import ImageThree from "../assets/img/slide-img3.jpg";
import ImageFour from "../assets/img/slide-img4.jpg";
import ImageFive from "../assets/img/slide-img5.jpg";
import ImageSix from "../assets/img/slide-img6.jpg";
import ImageSeven from "../assets/img/slide-img7.jpg";

import SwiperComponent from "./SwiperComponent";

const CardCarousel = () => {
  const data = [
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

  return (
    <div className="w-full py-8 lg:py-12  lg:px-16 font-tienne">
      <SwiperComponent data={data} />
    </div>
  );
};

export default CardCarousel;
