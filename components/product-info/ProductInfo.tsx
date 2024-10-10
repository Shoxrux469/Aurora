"use client";

import { Button } from "@/components/ui/button";
import { Check, Dot } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { paymentIcons } from "@/constants";
import { Separator } from "../ui/separator";
import { IProduct } from "@/interfaces/product";
import addToCart from "@/utils/addToCart";
import { useTranslations } from "next-intl";

const ProductInfo = ({ product }: { product: IProduct }) => {
  const { attributes, price, quantity, title } = product;

  const t = useTranslations("Product-page.product_info");

  return (
    <div className="p-2">
      <h2 className="text-2xl font-medium">{title}</h2>
      <Separator className="my-4" />
      <div>
        <span className="font-medium text-zinc-500">{t("price")}</span>
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
          {t("in_stock")} {quantity}
        </p>
      </div>

      <div className="my-6 flex items-center gap-3">
        <Button
          onClick={() => addToCart(product)}
          className="w-full py-6 text-base uppercase rounded-none"
        >
          {t("add_to_cart")}
        </Button>
      </div>

      <div className="mt-10 p-3 rounded-xl border border-border">
        <div className="px-1 text-sm font-medium">{t("fast_delivery")}</div>

        <Separator className="my-4" />

        <div className="px-1 text-sm font-medium">
          {t("secure_payment")}
          <div className="flex gap-2">
            {paymentIcons.map((item) => (
              <Image src={item} alt={item} width={36} height={32} key={item} />
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="px-1 text-sm font-medium">{t("easy_returns")}</div>
      </div>

      <ul className="mt-10 flex flex-col">
        <span className="text-sm font-medium text-zinc-500">
          {t("product_description")}
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
