import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SwiperComponent = ({ data }) => {
  // console.log(data);
  const isDesktopOrTablet = useMediaQuery({ query: "(min-width: 640px)" });
  return (
    <div className="px-4 lg:px-8">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={isDesktopOrTablet}
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
        // pagination={{ clickable: true }}
        className="mySwiper"
      >
        {data?.map((src, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "300px", height: "360px" }}
            className=""
          >
            <div className=" relative bg-secondary rounded-lg border-1 border-black ">
              <img
                src={src.img}
                alt=""
                style={{ height: "300px" }}
                className="w-full border-white rounded-lg   cursor-pointer"
              />
              <p
                style={{ height: "60px" }}
                className="text-[14px]  px-4 py-2 text-white"
              >
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
