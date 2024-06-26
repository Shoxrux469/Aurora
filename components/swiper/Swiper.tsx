'use client'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper/index.css";
import Image, { StaticImageData } from "next/image";
import slide1 from "../../assets/images/slide_1.webp";
import slide2 from "../../assets/images/slide_2.webp";
import slide3 from "../../assets/images/slide_3.webp";
import slide4 from "../../assets/images/slide_4.webp";

interface IimgsArr {
  path: StaticImageData;
  alt: string;
}

const MainSwiper = () => {
  const ImgsArr: IimgsArr[] = [
    {
      path: slide1,
      alt: "slide 1",
    },
    {
      path: slide2,
      alt: "slide 2",
    },
    {
      path: slide3,
      alt: "slide 3",
    },
    {
      path: slide4,
      alt: "slide 4",
    },
  ];
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: false }}
      className="w-full h-96 mt-4 hover:scale-[1.02] duration-300 text-4xl text-secondary rounded-xl"
    >
      {ImgsArr.map((img, i) => (
        <SwiperSlide key={i}>
          <Image
            width={1280}
            height={384}
            className="w-full h-full object-cover"
            src={img.path}
            alt={img.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
