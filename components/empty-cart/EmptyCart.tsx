import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

const EmptyCart = () => {
  const router = useRouter();

  return (
    <div className="py-24 text-center place-content-center">
      <h2 className="mb-2 text-2xl text-zinc-900 font-medium">
        В корзине пока нет товаров
      </h2>

      <p className="mb-4  text-zinc-700">
        Начните с подборок на главной странице или найдите нужный товар через
        поиск
      </p>

      <Button variant="purple" onClick={() => router.push("/")}>
        На главную
      </Button>
    </div>
  );
};

export default EmptyCart;
