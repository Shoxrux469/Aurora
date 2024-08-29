import { Separator } from "@radix-ui/react-separator";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import CartProduct from "../cart-product/CartProduct";
import { idType } from "@/interfaces";
import { ICartProduct } from "@/interfaces/product";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface props {
  cartItems: ICartProduct[];
  setCartItems: Dispatch<SetStateAction<ICartProduct[]>>;
}

const CartItemsList = ({ cartItems, setCartItems }: props) => {
  const t = useTranslations("Cart.cart-items-list");

  const getItemLabel = (count: number) => {
    if (count === 1) return t("item.single");
    if (count >= 2 && count <= 4) return t("item.few");
    return t("item.many");
  };

  const handleDelete = (id: idType) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleIncrease = (id: idType) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleDecrease = (id: idType) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const handleQuantityChange = (id: idType, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, cartQuantity: quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <Accordion
      type="single"
      collapsible
      className="p-6 rounded-xl bg-white shadow-md"
      defaultValue="single-item"
    >
      <AccordionItem value="single-item">
        <AccordionTrigger className="my-0 py-0">
          <div className="flex flex-col items-start">
            <h2 className="text-2xl font-medium">{t("title")}</h2>
            <p className="mb-5 font-thin italic">
              {cartItems.length} {getItemLabel(cartItems.length)}
            </p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-6 space-y-4">
          <Separator />
          {cartItems?.map((item, idx) => (
            <CartProduct
              key={idx}
              item={item}
              onDelete={handleDelete}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CartItemsList;
