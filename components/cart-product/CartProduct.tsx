import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { ICartProduct } from "@/interfaces/product";
import { idType } from "@/interfaces";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface props {
  item: ICartProduct;
  onDelete: (id: idType) => void;
  onIncrease: (id: idType) => void;
  onDecrease: (id: idType) => void;
  onQuantityChange: (id: idType, quantity: number) => void;
}

const CartProduct = ({
  item,
  onDelete,
  onIncrease,
  onDecrease,
  onQuantityChange,
}: props) => {
  const router = useRouter();
  const [inputQuantity, setInputQuantity] = useState<number>(item.cartQuantity);
  const t = useTranslations("Cart");

  useEffect(() => {
    if (item.cartQuantity == 0 && isNaN(item.cartQuantity)) {
      setInputQuantity(1);
    }
    setInputQuantity(item.cartQuantity);
  }, [item.cartQuantity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);

    setInputQuantity(newQuantity);
    if (!isNaN(newQuantity)) {
      onQuantityChange(item.id, newQuantity);
    }
    if (newQuantity > item.quantity) {
      onQuantityChange(item.id, item.quantity);
      setInputQuantity(item.quantity);
    }
  };

  const productPage = (id: string) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="flex items-start space-x-4 ">
      <Image
        src={item.images_links[0]}
        alt="Product Image"
        width={240}
        height={240}
        className="w-28 h-full cursor-pointer object-cover rounded-lg"
        onClick={() => productPage(item.id)}
      />
      <div className="flex-1 flex items-start gap-1">
        <div className="max-w-[340px] w-full">
          <h3
            onClick={() => productPage(item.id)}
            className="cursor-pointer hover:underline text-lg text-balance leading-5"
          >
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.attributes.color}
          </p>
          <p className="mt-1 text-sm text-purple-600">{item.category.title}</p>
        </div>

        <div className="flex items-center space-x-3 mt-2">
          <Button
            variant="purple"
            size="icon"
            disabled={item.cartQuantity <= 1}
            onClick={() => onDecrease(item.id)}
          >
            −
          </Button>
          <input
            type="number"
            min="1"
            value={inputQuantity}
            onChange={handleInputChange}
            className="w-9 h-9 text-center text-lg font-medium border rounded outline-none"
          />
          <Button
            variant="purple"
            size="icon"
            disabled={inputQuantity === item.quantity}
            onClick={() => onIncrease(item.id)}
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
        <div className="text-lg font-medium">
          ${item.price * item.cartQuantity}.00
        </div>
        <div className="text-sm text-muted-foreground line-through">
          ${item.price + 9}.99
        </div>
        <Button variant="ghost" size="icon" onClick={() => onDelete(item.id)}>
          <TrashIcon className="w-5 h-5" />
          <span className="sr-only">{t("delete")}</span>
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
