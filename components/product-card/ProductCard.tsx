"use client";
import { IProduct } from "@/interfaces/product";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const router = useRouter();
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
      <div className="flex flex-col justify-between h-44">
        <div className="space-y-1 flex flex-col text-start">
          <h4 className="text-[17px] font-bold leading-5 text-balance">
            {product.title}
          </h4>
          <p className="text-balance text-base h-auto leading-5">
            {product.description.slice(0, 70) + "..."}
          </p>
          <span
            className={`font-medium text-base
          ${product.quantity > 5 ? "text-primary" : "text-[#f3c326]"} 
          `}
          >
            В наличии {product.quantity}
          </span>
        </div>
        <div className="flex pt-3 flex-initial justify-between items-center">
          <p className="text-lg text-primary font-medium">
            ${product.price}.00
          </p>
          <Button variant="outline" size="icon">
            <ShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
