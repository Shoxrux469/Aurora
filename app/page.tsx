import { Main } from '@/components/component/main'
import { IProduct } from '@/interfaces/product'
import ProductsService from "@/services/api/products"

const Home = async () => {
  let results = await ProductsService.getAll()

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
