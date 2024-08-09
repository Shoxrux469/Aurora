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

export interface IUserOrder {
  orderDate: Date;
  price: string;
  items: IUserCartItem;
  orderId: idType;
}

export interface IUser extends User {
  id: idType;
  cart?: IUserCart;
  email?: string;
  password: string;
  orders?: IUserOrder[];
  name:string 
}
