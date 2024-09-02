import { User } from "next-auth";
import { idType } from ".";

interface IUserCartItem {
  itemId: idType;
  itemPrice: string;
  quantity: number;
}

export interface IUserCart {
  items: IUserCartItem[];
  totalPrice: string;
}

export interface IUser {
  id: idType;
  cart: IUserCart;
  email: string;
  image: string;
  name: {
    name: string;
    surname: string;
  };
}
