"use client";
import { IProduct } from "@/interfaces/product";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ShoppingCartIcon } from "lucide-react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const router = useRouter();

  const addToCart = (product: IProduct) => {
    const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
    const productExists = cart.some(item => item.id === product.id)

    if (!productExists) {
      cart.push(product)
      localStorage.setItem("cart", JSON.stringify(cart))
    }
  }

  return (
    <div className="max-w-sm mx-auto space-y-2 group cursor-pointer rounded-lg">
      <div
        onClick={() => router.push(`/product/${product.id}`)}
        className="bg-gray-100 overflow-hidden rounded-lg"
      >
        <img
          alt={product.title}
          className="w-full transition-transform group-hover:scale-105 rounded-lg ease-in-out"
          height="200"
          src={product.images_links[0]}
          width="200"
        />
      </div>
      <div className="h-32 flex flex-col justify-between">
        <div className="space-y-1 flex flex-col text-start">
          <h4 className="text-base font-medium leading-5 text-balance">
            {product.title}
          </h4>
          <span
            className="text-base font-medium text-purple-600"
          >
            В наличии {product.quantity}
          </span>
        </div>
        <div className="flex items-end justify-between mt-4">
          <span className="font-bold text-lg text-primary">${product.price}.00</span>
          <Button
            size="icon"
            className="flex gap-1 bg-primary"
            onClick={() => addToCart(product)}
          >
            <ShoppingCartIcon size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
