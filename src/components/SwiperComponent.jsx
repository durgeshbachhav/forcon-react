import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ data }) => {
  console.log(data);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      //  pagination={{ clickable: true }}
      //  scrollbar={{ draggable: true }}
      //  onSwiper={(swiper) => console.log(swiper)}
      //  onSlideChange={() => console.log("slide change")}
    >
      {data?.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="group relative">
            <img
              src={src.img}
              alt=""
              className="w-full h-48 object-cover rounded-lg group-hover:opacity-75"
            />
            <p className="absolute inset-0 px-4 py-2 text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out bg-black/50 backdrop-blur-sm">
              {src.desc}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
