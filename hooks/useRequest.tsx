import { IProduct } from "@/interfaces/product";
import ProductsService from "@/services/api/products";

const useRequest = () => {
  const getAllProducts = async (): Promise<IProduct[]> => {
    const res: IProduct[] = await ProductsService.getAll();
    return res;
  };

  return {
    getAllProducts,
  };
};
export default useRequest;
