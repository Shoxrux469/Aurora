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

interface props {
  cartItems: ICartProduct[];
  setCartItems: Dispatch<SetStateAction<ICartProduct[]>>;
}

const CartItemsList = ({ cartItems, setCartItems }: props) => {
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
            <h2 className="text-2xl font-medium">Корзина</h2>
            <p className="mb-5 font-thin italic">
              {cartItems.length}{" "}
              {cartItems.length === 1 ? (
                <span>товар</span>
              ) : cartItems.length >= 2 && cartItems.length <= 4 ? (
                <span>товара</span>
              ) : (
                <span>товаров</span>
              )}
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
