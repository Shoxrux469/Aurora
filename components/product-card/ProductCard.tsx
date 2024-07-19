"use client";
import { IProduct } from "@/interfaces/product";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

const ProductCard = ({ product }: { product: IProduct }) => {
  const router = useRouter();
  return (
    <div className="max-w-sm mx-auto group cursor-pointer rounded-lg">
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
      <div className="px-2 py-3 space-y-1">
        <h4 className="min-h-16 text-lg font-bold text-balance">{product.title}</h4>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-base font-medium">
            ${product.price}.00
          </p>
          <Button>
            Add to &nbsp;<ShoppingBag />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
