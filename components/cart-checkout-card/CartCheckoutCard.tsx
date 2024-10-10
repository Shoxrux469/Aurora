import React, { Dispatch, useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { ICartProduct } from "@/interfaces/product";
import { idType } from "@/interfaces";
import { IOrder } from "@/interfaces/order";
import OrderService from "@/services/api/order";
import { toast } from "../ui/use-toast";
import { useTranslations } from "next-intl";

interface props {
  cartItems: ICartProduct[];
  address: string;
  paymentCard: string | null;
  userId: idType;
  userEmail: string;
  setCartItems: Dispatch<[]>;
}

const CartCheckoutCard = ({
  cartItems,
  setCartItems,
  address,
  userEmail,
  userId,
}: props) => {
  const t = useTranslations("Cart.cart-checkout");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce(
        (acc, value) => acc + value.price * value.cartQuantity,
        0
      );
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [cartItems]);

  const handleOrderSubmit = async () => {
    setIsLoading(true);
    try {
      const order: Partial<IOrder> = {
        items: cartItems,
        address: address,
        paymentMethod: "master",
        status: 0,
        totalPrice: totalPrice,
        user: {
          id: userId,
          email: userEmail,
        },
      };
      let res = await OrderService.postOrder(order);

      if (res.status == 200) {
        setCartItems([]);
        localStorage.setItem("cart", JSON.stringify([]));
        toast({
          title: t("orderPlacedTitle"),
          description: t("orderPlacedDescription"),
          variant: "default",
        });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Card className="bg-white border-none h-fit shadow-md sticky top-4">
      <CardHeader className="py-4">
        <CardTitle className="text-2xl font-medium">{t("yourOrder")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex justify-between">
          <p>
            {t("payWithCard")} <span>-- 6261</span>
          </p>
        </div>

        <div className="flex justify-between text-zinc-500">
          <span>{t("items", { count: cartItems.length })}:</span>
          <span>${totalPrice}.00</span>
        </div>
        <div className="flex justify-between font-medium text-xl mt-2">
          <span>{t("total")}:</span>
          <span>${totalPrice + 25}.00</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="default"
          size="lg"
          className="w-full text-white"
          onClick={handleOrderSubmit}
          disabled={isLoading}
        >
          {isLoading ? t("loading") : t("placeOrder")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartCheckoutCard;
