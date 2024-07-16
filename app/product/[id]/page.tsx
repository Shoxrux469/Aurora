"use server";
import ProductSwiper from "@/components/product-swiper/ProductSwiper";
import { IProduct } from "@/interfaces/product";
import React from "react";
import ProductsService from "@/services/api/products";

interface params {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: params) => {
  const product = (await ProductsService.GetById(id)) as IProduct;

  return (
    <div>
      <div className="w-[44%] h-full">
        <ProductSwiper images={product.images_links}></ProductSwiper>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default ProductPage;
