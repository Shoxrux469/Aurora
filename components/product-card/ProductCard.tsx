import { IProduct } from "@/interfaces/product";
import Link from "next/link";
import ProductCardInfo from "../product-card-info/ProductCardInfo";
import { addLocalePrefix } from "@/utils/addLocalePrefix";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="max-w-sm mx-auto space-y-2 group cursor-pointer rounded-lg">
      <Link
        href={addLocalePrefix(`/product/${product.id}`)}
        className="bg-gray-100 rounded-lg"
      >
        <div className="overflow-hidden">
          <img
            alt={product.title}
            className="w-full transition-transform group-hover:scale-105 rounded-lg ease-in-out"
            src={product.images_links[0]}
            width="200"
          />
        </div>
      </Link>
      <ProductCardInfo product={product} />
    </div>
  );
};

export default ProductCard;
