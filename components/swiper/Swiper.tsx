"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper/index.css";
import Image from "next/image";
import { SwiperImgsArr } from "@/constants";

const MainSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: false }}
      className="w-full h-96 mt-4 hover:scale-[1.02] duration-300 text-4xl text-secondary rounded-xl"
    >
      {SwiperImgsArr.map((img, i) => (
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
