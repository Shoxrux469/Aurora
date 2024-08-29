import React from "react";
import ProductsService from "@/services/api/products";
import { IProduct } from "@/interfaces/product";
import ProductCart from "@/components/product-card/ProductCard";
import Loading from "@/app/[locale]/loading";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface Params {
  params: {
    slug: string[];
    locale: string;
  };
}

const FilteredProducts = async ({ params: { slug, locale } }: Params) => {
  const t = await getTranslations("filtered-products");
  let filteredProducts: IProduct[] = [];
  if (slug && slug.length > 0) {
    if (slug[0] === "id") {
      filteredProducts = await ProductsService.getBySubcategoryid(
        slug[1],
        (progress) => <Loading value={progress} />
      );
    } else if (slug[0] === "text") {
      filteredProducts = await ProductsService.getByTitle(
        decodeURIComponent(slug[1]),
        (progress) => <Loading value={progress} />
      );
    }
  }

  return (
    <div className="px-8">
      <h1 className="text-3xl text-primary text-center w-full font-semibold">
        {t("foundProducts")}
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, i) => (
            <ProductCart currentLocale={locale} key={i} product={product} />
          ))
        ) : (
          <p className="text-3xl">{t("noProductsFound")}</p>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
