import Product from '@/components/product/product';
import MainSwiper from '@/components/swiper/swiper';
import { IProduct } from '@/interfaces/product'
import ProductsService from "@/services/api/products"
import { ICategory } from '@/interfaces/category';
import CategoriesService from "@/services/api/categories"
import { v4 as uuid } from 'uuid';

const Home = async () => {
  let products = await ProductsService.getAll() as IProduct[];
  // let categories = await CategoriesService.getAll() as ICategory[]
  // let post = await CategoriesService.postCategory(obj)
  // let post = await ProductsService.postProduct(obj)

  return (
    <div className="bg-white">
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products?.map((product, i) => (
            <Product key={i} product={product}></Product>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

