import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import bagsImg from "../../assets/bags.jpeg"
import blackFri from "../../assets/black-friday.jpg"
import burKha from "../../assets/burkha-women.jpg"
import coffee from "../../assets/coffee.jpg"
import off from "../../assets/off-70.avif"
import fashion from "../../assets/fashion.jpeg"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [bagsImg, blackFri, burKha, coffee, off, fashion];

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop
        autoplay={{ delay: 3000 }}
        // navigation
        pagination={{ clickable: true }}
        className="lg:h-150 rounded-box"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-box"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;