"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./index.css";

import {
  EffectFade,
  FreeMode,
  Navigation,
  // Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";

interface ProductSwiperProps {
  images: string[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  return (
    <div className="flex h-full gap-2">
      <Swiper
        direction="vertical"
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="MySwiper1 w-2/12"
      >
        {images.map((imgURL, i) => (
          <SwiperSlide key={i}>
            <img
              className="w-full h-full object-cover"
              src={imgURL}
              alt={`Thumbnail image ${i}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        direction="horizontal"
        navigation={true}
        spaceBetween={3}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, FreeMode, Navigation, Thumbs]}
        className="w-10/12 h-full"
      >
        {images.map((imgURL, i) => (
          <SwiperSlide key={i}>
            <img src={imgURL} alt={`Product image ${i}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
