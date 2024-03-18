import React, { useState, useEffect } from "react";
import ImageOne from "../assets/img/Jpeg/eight.jpg";
import ImageTwo from "../assets/img/Jpeg/two.jpg";
import ImageThree from "../assets/img/Jpeg/three.jpg";
import ImageFour from "../assets/img/Jpeg/six.jpg";
import ImageFive from "../assets/img/Jpeg/five.jpg";
import ImageSix from "../assets/img/Jpeg/seven.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: ImageOne,
      title: `Providing Smart Infrastructure Solutions for a better tomorrow`,
    },
    {
      src: ImageTwo,
      title: `Bringing Vision to Life-Building futuristic sustainability`,
    },
    {
      src: ImageThree,
      title: `Our Aim - Delivering quality within time and budget`,
    },
    {
      src: ImageFour,
      title: `Excellence in Action-Providing Innovative Solutions`,
    },
    {
      src: ImageFive,
      title: `Smart Infrastructure for a Brighter Future`,
    },
    {
      src: ImageSix,
      title: `Delivering Excellence in Infrastructure Manufacturing`,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 18000); // Adjust the interval as needed (5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-64 overflow-hidden md:h-96 lg:h-[80vh] ">
        {/* Carousel items */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full   ${
              index === currentIndex ? "" : "hidden"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="absolute  w-full h-full Carousel-animation"
            />
            <div className="absolute  text-center top-10 lg:text-right lg:w-[30vw]  lg:right-0 lg:top-0 lg:text-wrap h-screen">
              <h1 className="text-white font-tienne font-bold text-xl lg:text-4xl lg:h-screen lg:bg-gray-950 lg:bg-opacity-50 lg:w-full lg:flex lg:items-start lg:justify-start p-10">
                {image.title}
              </h1>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}

      <button
        type="button"
        className="hidden lg:block absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        {/* Previous button */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800 group-focus:ring-4  group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white  rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="hidden lg:block absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        {/* Next button */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800 group-focus:ring-4  group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;

// import React from "react";
// import SwiperComponent from "./SwiperComponent";

// const Carousel = () => {
//   const images = [
//     {
//       src: ImageOne,
//       title: `Providing Smart Infrastructure Solutions for a better tomorrow`,
//     },
//     {
//       src: ImageTwo,
//       title: `Bringing Vision to Life-Building futuristic sustainability`,
//     },
//     {
//       src: ImageThree,
//       title: `Our Aim - Delivering quality within time and budget`,
//     },
//     {
//       src: ImageFour,
//       title: `Excellence in Action-Providing Innovative Solutions`,
//     },
//     {
//       src: ImageFive,
//       title: `Smart Infrastructure for a Brighter Future`,
//     },
//     {
//       src: ImageSix,
//       title: `Delivering Excellence in Infrastructure Manufacturing`,
//     },
//   ];
//   return (
//     <div>
//       <SwiperComponent data={images} imagesperSide={1} />
//     </div>
//   );
// };

// export default Carousel;
