import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const CreateProd = ({ prod }: { prod: IProduct }) => {
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
        <h4 className="text-lg font-bold">{prod.categories}</h4>
        <p className="text-gray-600">{prod.color_product}</p>
        <Button className="mt-3">View Product</Button>
      </div>
    </div>
  );
};

export default CreateProd;
