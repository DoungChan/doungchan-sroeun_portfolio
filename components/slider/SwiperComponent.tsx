import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Autoplay } from "swiper";

// Install Swiper modules
SwiperCore.use([Autoplay]);

type SwiperProps = {
  slide_img: string[];
};
const SwiperComponent: React.FC<SwiperProps> = ({ slide_img }) => {
  const duplicatedSlides = [...slide_img, ...slide_img];
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      loop
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
      }}
    >
      {duplicatedSlides.map((item, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img
            src={item}
            alt={`Image ${index + 1}`}
            width={100}
            height={100}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
