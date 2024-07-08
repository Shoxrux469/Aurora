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
          height="400"
          width="400"
          src={product.images_links[0]}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="py-4">
        <h4 className="text-lg font-bold">{product.title}</h4>
        <p className="text-gray-600">{product.category.title}</p>
        <Button className="mt-3">View Product</Button>
      </div>
    </div>
  );
};

export default Product;
