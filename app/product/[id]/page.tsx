"use server";
import ProductSwiper from "@/components/product-swiper/ProductSwiper";
import { IProduct } from "@/interfaces/product";
import React from "react";
import ProductsService from "@/services/api/products";
import ProductInfo from "@/components/product-info/ProductInfo";

interface params {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: params) => {
  const product = await ProductsService.GetById(id) as IProduct;

  return (
    <>
      <section className="product-overview flex gap-8">
        <div className="w-1/2 h-full">
          <ProductSwiper images={product.images_links}></ProductSwiper>
        </div>

        <div className="w-[35%]">
          <ProductInfo
            title={product.title}
            price={product.price}
            specific={product.attributes.specific}
            quantity={product.quantity}
            color={product.attributes.color}
          />
        </div>
      </section>

      <div className="separator my-20"></div>

      <section className="product-description py-8 max-w-[70%] mx-auto">
        <p className="text-base text-zinc-700">{product.description}</p>
      </section>

      <section className="related-products mt-5 text-center text-3xl">Related Products</section>
    </ >
  );
};

export default ProductPage;
