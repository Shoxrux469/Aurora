"use client";
import { IProduct } from "@/interfaces/product";
import { Button } from "../ui/button";
import { ShoppingCartIcon } from "lucide-react";
import addToCart from "@/utils/addToCart";
import { useTranslations } from "next-intl";

const ProductCardInfo = ({ product }: { product: IProduct }) => {
  const t = useTranslations("Product-page.product_info");

  return (
    <div className="h-32 flex flex-col justify-between">
      <div className="space-y-1 flex flex-col text-start">
        <h4 className="text-base font-medium leading-5 text-balance">
          {product.title}
        </h4>
        <span className="text-base font-medium text-purple-600">
          {t("in_stock")} {product.quantity}
          <span className="text-xs">{t("pcs")}</span>
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
