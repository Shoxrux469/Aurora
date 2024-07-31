import ProductSwiper from "@/components/product-swiper/ProductSwiper";
import { IProduct } from "@/interfaces/product";
import React from "react";
import ProductsService from "@/services/api/products";
import ProductInfo from "@/components/product-info/ProductInfo";
import ProductCard from "@/components/product-card/ProductCard";
import { Separator } from "@/components/ui/separator";
import Loading from "@/app/loading";

interface params {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: params) => {
  const product = (await ProductsService.getById(id, (progress) => (
    <Loading value={progress} />
  ))) as IProduct;

  let relatedProducts = (
    await ProductsService.getBySubcategoryid(
      product.category.id,
      (progress) => <Loading value={progress} />
    )
  )
    .filter((prod) => prod.id !== id)
    .slice(0, 5) as IProduct[];

  return (
    <div className="container px-8">
      <section className="product-overview flex gap-8 pt-8">
        <div className="h-full w-1/2">
          <ProductSwiper images={product.images_links}></ProductSwiper>
        </div>

        <div className="w-1/2">
          <ProductInfo product={product} />
        </div>
      </section>

      <Separator className="mt-20" />

      <section className="product-description py-8 max-w-[70%] mx-auto">
        <p className="text-base text-zinc-700">{product.description}</p>
      </section>

      <section className="related-products mt-5 text-center text-3xl">
        <h1>Related Products</h1>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {relatedProducts?.map((product, i) => (
            <ProductCard key={i} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
