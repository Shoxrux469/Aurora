"use client";
import { IProduct } from "@/interfaces/product";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const ProductCart = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  return (
    <div className="max-w-sm mx-auto cursor-pointer rounded-lg">
      <div
        onClick={() => router.push(`/product/${product.id}`)}
        className="bg-gray-100 overflow-hidden rounded-lg"
      >
        <img
          alt={product.title}
          className="w-full transition-transform rounded-lg hover:scale-105 ease-in-out"
          height="200"
          src={product.images_links[0]}
          width="200"
        />
      </div>
      <div className="py-2">
        <h4 className="text-lg font-bold leading-tight text-balance">
          {product.title}
        </h4>
        <p className="text-gray-600 text-balance">
          {product.description.slice(0, 48) + "..."}
        </p>
        <p className="text-gray-600 text-sm my-1 text-primary">
          {product.category.title}
        </p>
        <Button>Add to cart</Button>
      </div>
    </div>
  );
};

export default ProductCart;
