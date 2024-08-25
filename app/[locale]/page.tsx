import MainSwiper from "@/components/swiper/Swiper";
import { IProduct } from "@/interfaces/product";
import ProductsService from "@/services/api/products";
import ProductCard from "@/components/product-card/ProductCard";
import { getTranslations } from "next-intl/server";
import Loading from "./loading";

const Home = async () => {
  const t = await getTranslations("HomePage");

  const products = (await ProductsService.getAll((progress: number) => {
    <Loading value={progress} />;
  })) as IProduct[];

  return (
    <div className="bg-white container px-8">
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">{t("title")}</h3>
        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-6">
          {products?.map((product, i) => (
            <ProductCard key={i} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
