"use client";
import { ICartProduct } from "@/interfaces/product";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const OrderDetailsItems = ({ item }: { item: ICartProduct }) => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";

  const productPage = (id: string) => {
    router.push(`/${currentLocale}/product/${id}`);
  };

  return (
    <div className="flex items-start space-x-4 ">
      <Image
        src={item.images_links[0]}
        alt="Product Image"
        width={240}
        height={240}
        className="w-20 h-full cursor-pointer object-cover rounded-lg"
        onClick={() => productPage(item.id)}
      />
      <div className="flex-1 flex items-start gap-1">
        <div className="max-w-[340px] w-full">
          <h3
            onClick={() => productPage(item.id)}
            className="cursor-pointer hover:underline text-base text-balance leading-5"
          >
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {item.attributes.color}
          </p>
          <p className="mt-1 text-xs font-medium text-purple-600">
            {item.category.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsItems;
