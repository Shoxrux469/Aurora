import { IProduct } from '@/interfaces/product'
import ProductsService from "@/services/api/products"

const Home = async () => {
  let results = await ProductsService.getAll() as IProduct[]

  return (
    <div>


      {results?.map((item: IProduct) => (
        <p key={item.id}>{item.promo_content.title}</p>
      ))}
    </div>
  );
};

export default Home;
