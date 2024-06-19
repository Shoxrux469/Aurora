<<<<<<< HEAD
import { Main } from "@/pages/main/main";
import ProductsService from "@/services/api/products";

const Home = async () => {
  let res = await ProductsService.getAll();
=======
import { Main } from '@/components/component/main'
import { IProduct } from '@/interfaces/product'
import ProductsService from "@/services/api/products"

const Home = async () => {
  let results = await ProductsService.getAll()
>>>>>>> 5a7eae26ce2f42e123acc3b2f963c6e614ecee02

  return (
    <div>
      <Main />
      {results?.map((item: IProduct) => (
        <p key={item.id}>{item.categories}</p>
      ))}
    </div>
  );
};

export default Home;
