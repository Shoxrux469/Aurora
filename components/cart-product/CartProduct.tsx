import { Button } from "../ui/button";
import { TrashIcon } from "lucide-react";
import Image from "next/image";
import { ICartProduct } from "@/interfaces/product";
import { idType } from "@/interfaces";

interface props {
  item: ICartProduct;
  onDelete: (id: idType) => void;
  onIncrease: (id: idType) => void;
  onDecrease: (id: idType) => void;
}

const CartProduct = ({ item, onDelete, onIncrease, onDecrease }: props) => {
  return (
    <div className="flex items-start space-x-4 ">
      <Image
        src={item.images_links[0]}
        alt="Product Image"
        width={240}
        height={240}
        className="w-28 h-full object-cover rounded-lg"
      />
      <div className="flex-1 flex items-start gap-1">
        <div className="max-w-[340px] w-full">
          <h3 className="text-lg text-balance leading-5">{item.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {item.attributes.color}
          </p>
          <p className="mt-1 text-sm text-purple-600">{item.category.title}</p>
        </div>

        <div className="flex items-center space-x-3 mt-2">
          <Button
            variant="purple"
            size="icon"
            disabled={item.cartQuantity == 1}
            onClick={() => onDecrease(item.id)}
          >
            −
          </Button>
          <span className="px-1 text-lg font-medium">{item.cartQuantity}</span>
          <Button
            variant="purple"
            size="icon"
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
          <span className="sr-only">Удалить</span>
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
