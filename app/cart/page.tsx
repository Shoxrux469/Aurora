
import React from "react";
import PaymentMethods from "@/components/payment-methods/PaymentMethods";
import UserDataCard from "@/components/user-data-card/UserDataCard";
import { Input } from "@/components/ui/input";
import CartProvider from "@/components/cart-provider/CartProvider";

const CartPage = () => {
  return (
    <CartProvider>
      <div className="flex gap-5">
        <PaymentMethods />
        <UserDataCard />
      </div>

      <div className="p-6 rounded-xl bg-white shadow-md">
        <h2 className="text-2xl font-medium">Паспортные данные</h2>

        <div className="py-4 grid grid-cols-2 gap-4">
          <div>
            <span className="text-sm text-zinc-500">
              Серия и номер паспорта *
            </span>
            <Input className="h-11 mt-1.5 border rounded-md" />
          </div>
          <div>
            <span className="text-sm text-zinc-500">ПИНФЛ *</span>
            <Input className="h-11 mt-1.5 border rounded-md" />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default CartPage;
