"use client";
import EmptyCard from "@/components/empty-card/EmptyCard";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import CartProduct from "@/components/cart-product/CartProduct";
import CheckoutCard from "@/components/checkout-card/CheckoutCard";
import { idType } from "@/interfaces";
import { ICartProduct } from "@/interfaces/product";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  let isEmpty = cartItems.length === 0;

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      try {
        let arr = JSON.parse(cart).map((item: ICartProduct) => ({
          ...item,
          cartQuantity: item.cartQuantity || 1,
        }));
        setCartItems(arr);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        setCartItems([]);
      }
    }
  }, []);

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

  if (isEmpty)
    return (
      <EmptyCard
        title="В корзине пока нет товаров"
        description="Начните с подборок на главной странице или найдите нужный товар через
        поиск"
      />
    );

  return (
    <section className="pt-8 pb-40 bg-muted">
      <div className="container px-8 grid grid-cols-1 lg:grid-cols-3 gap-4 relative">
        <div className="lg:col-span-2">
          <div className="p-4 rounded-xl bg-white shadow-md">
            <h2 className="text-2xl font-medium">Корзина</h2>
            <p className="mb-5 font-thin italic">{cartItems.length} товар</p>
            <Separator />
            <div className="pt-6 space-y-4">
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
            </div>
          </div>
        </div>
        <CheckoutCard cartItems={cartItems} />
      </div>
    </section>
  );
};

export default CartPage;
