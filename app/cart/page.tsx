import React from "react";
import CartPamentCard from "@/components/cart-payment-card/CartPaymentCard";
import CartUserDataCard from "@/components/cart-user-data-card/CartUserDataCard";
import CartProvider from "@/components/cart-provider/CartProvider";
import { getCurrentUser } from "@/lib/auth";

const CartPage = async () => {
  const user = await getCurrentUser();

  return (
    <CartProvider>
      <div className="flex gap-5">
        <CartPamentCard />
        <CartUserDataCard user={user} />
      </div>
    </CartProvider>
  );
};

export default CartPage;