"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const EmptyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const router = useRouter();
  const t = useTranslations("Cart.cart-items-list.empty-cart");

  return (
    <div className="flex flex-col items-center h-80  justify-center text-center place-content-center">
      <h2 className="mb-2 text-2xl text-zinc-900 font-medium">{title}</h2>

      <p className="mb-4 text-zinc-700 text-balance w-2/3">{description}</p>

      <Button
        variant="purple"
        className="w-fit"
        onClick={() => router.push("/")}
      >
        {t("to_the_homepage_btn")}
      </Button>
    </div>
  );
};

export default EmptyCard;
