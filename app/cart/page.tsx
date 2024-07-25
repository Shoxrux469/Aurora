import EmptyCart from "@/components/empty-cart/EmptyCart";
import React from "react";

const page = () => {
  let cartItems = [];
  let isEmpty = cartItems.length === 0;

  if (isEmpty) return <EmptyCart />;

  return <div></div>;
};

export default page;
