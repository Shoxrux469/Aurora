'use client'

import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import { Button } from "../ui/button";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="max-w-sm mx-auto">
      <div className="bg-gray-100">
        <Image
          alt="Product"
          className="w-full"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
      </div>
      <div className="py-4">
        <h4 className="text-lg font-bold">{product.promo_content.title}</h4>
        <p className="text-gray-600">{product.category.name}</p>
        <Button className="mt-3">View Product</Button>
      </div>
    </div>
  );
};

export default Product;
