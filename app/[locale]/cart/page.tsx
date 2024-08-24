import React from "react";
import CartPamentCard from "@/components/cart-payment-card/CartPaymentCard";
import CartUserDataCard from "@/components/cart-user-data-card/CartUserDataCard";
import { getCurrentUser } from "@/lib/auth";
import CartProvider from "@/providers/CartProvider";
// import CartProvider from "@/components/cart-provider/CartProvider";

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
