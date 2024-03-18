import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ data }) => {
  // console.log(data);
  return (
    <div className="px-8 lg:px-8">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {data?.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="group relative bg-primary rounded-lg ">
              <img
                src={src.img}
                alt=""
                className="w-full h-60 object-cover rounded-lg group-hover:opacity-75 p-2 cursor-pointer"
              />
              <p className="text-[14px]  px-4 py-2 text-tablesubheadingcolor  ">
                {src.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
