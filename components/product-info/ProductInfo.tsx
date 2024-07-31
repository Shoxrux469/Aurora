"use client";

import { Button } from "@/components/ui/button";
import { Check, Dot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { paymentIcons } from "@/constants";
import { Separator } from "../ui/separator";
import { IProduct } from "@/interfaces/product";
import addToCart from "@/utils/addToCart";

const ProductInfo = ({ product }: { product: IProduct }) => {
  const { attributes, price, quantity, title } = product;
  return (
    <div className="p-2">
      <h2 className="text-2xl font-medium">{title}</h2>
      <Separator className="my-4" />
      <div>
        <span className="font-medium text-zinc-500">Цена:</span>
        <p className="text-2xl font-medium tracking-wider">${price}.00</p>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <Badge variant={"outline"}>
          <Check size={18} color="#555" />
        </Badge>

        <p
          className={`font-medium 
          ${quantity > 5 ? "text-primary" : "text-[#f3c326]"} 
          `}
        >
          В наличии {quantity}
        </p>
      </div>

      <div className="my-6 flex items-center gap-3">
        <Button
          onClick={() => addToCart(product)}
          className="w-full py-6 text-base uppercase rounded-none"
        >
          Добавить в корзину
        </Button>
      </div>

      <div className="mt-10 p-3 rounded-xl border border-border">
        <div className="px-1 text-sm font-medium">Быстрая доставка</div>

        <Separator className="my-4" />

        <div className="px-1 text-sm font-medium">
          Безопасная оплата удобным способом
          <div className="flex gap-2">
            {paymentIcons.map((item) => (
              <Image src={item} alt={item} width={36} height={32} key={item} />
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="px-1 text-sm font-medium">
          Простой и быстрый возврат
        </div>
      </div>

      <ul className="mt-10 flex flex-col">
        <span className="text-sm font-medium text-zinc-500">
          Кратко о товаре:
        </span>
        {attributes.specific?.map((item) => (
          <li key={item} className="flex items-center">
            <Dot size={32} color="#71717a" />
            <p className="text-base">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductInfo;
