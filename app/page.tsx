import { Main } from "@/pages/main/main";
import ProductsService from "@/services/api/products";

const Home = async () => {
  let res = await ProductsService.getAll();

  console.log(res);
  return (
    <div>
      <Main />
    </div>
  );
};

export default Home;
