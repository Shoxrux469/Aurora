import ProductCart from "@/components/productCart/ProductCart";
import MainSwiper from "@/components/swiper/Swiper";
import { IProduct } from "@/interfaces/product";
import ProductsService from "@/services/api/products";
import { ICategory } from "@/interfaces/category";
import CategoriesService from "@/services/api/categories";
import { IUser } from "@/interfaces/user";

const Home = async () => {
  let products = (await ProductsService.getAll()) as IProduct[];
  let categories = (await CategoriesService.getAll()) as ICategory[];

  return (
    <div className="bg-white">
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {products?.map((product, i) => (
            <ProductCart key={i} product={product}></ProductCart>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
