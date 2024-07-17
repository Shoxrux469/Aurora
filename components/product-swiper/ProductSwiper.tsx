"use client";

import React, { useState } from "react";
// Import Swiper React components
import { Swiper as SwiperType, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { EffectFade, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperInstance } from "swiper";

interface ProductSwiperProps {
  images: string[];
}

const ProductSwiper: React.FC<ProductSwiperProps> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);

  const customStyle: React.CSSProperties & { [key: string]: string } = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  return (
    <div className="flex gap-2">
      <SwiperType
        direction="vertical"
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-3/12"
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
      </SwiperType>
      <SwiperType
        direction="horizontal"
        style={customStyle}
        spaceBetween={10}
        effect={"fade"}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFade, FreeMode, Thumbs]}
        className="w-9/12 h-full"
      >
        {images.map((imgURL, i) => (
          <SwiperSlide key={i}>
            <img src={imgURL} alt={`Product image ${i}`} />
          </SwiperSlide>
        ))}
      </SwiperType>
    </div>
  );
};

export default ProductSwiper;
