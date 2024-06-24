import { Main } from "@/pages/main/main";
import { IProduct } from "@/interfaces/product";
import ProductsService from "@/services/api/products";

const Home = async () => {
  let products = await ProductsService.getAll();

  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;
