import { toast } from "@/components/ui/use-toast";
import { IProduct } from "@/interfaces/product";

const addToCart = (product: IProduct) => {
  const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  const productExists = cart.some((item) => item.id === product.id);

  if (!productExists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast({
      title: "Добавлено!",
      description: "Данный товар был успешно добавлен в корзину",
      variant: "constructive",
    });
  } else {
    toast({
      title: "Ошибка!",
      description: "Данный товар уже присутствует в вашей карзине",
      variant: "destructive",
    });
  }
};

export default addToCart;
