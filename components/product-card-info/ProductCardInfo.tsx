"use client";
import { IProduct } from "@/interfaces/product";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";

const ProductCardInfo = ({ product }: { product: IProduct }) => {
  const addToCart = (product: IProduct) => {
    const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExists = cart.some((item) => item.id === product.id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  return (
    <div className="h-32 flex flex-col justify-between">
      <div className="space-y-1 flex flex-col text-start">
        <h4 className="text-base font-medium leading-5 text-balance">
          {product.title}
        </h4>
        <span className="text-base font-medium text-purple-600">
          В наличии {product.quantity}
        </span>
      </div>
      <div className="flex items-end justify-between mt-4">
        <span className="font-bold text-lg text-primary">
          ${product.price}.00
        </span>
        <Button
          size="icon"
          className="flex gap-1 bg-primary"
          onClick={() => addToCart(product)}
        >
          <ShoppingCartIcon size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCardInfo;
