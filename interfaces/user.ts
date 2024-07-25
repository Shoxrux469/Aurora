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

export interface IUser {
  id: idType;
  cart: IUserCart;
  email: string;
  password: string;
  orders: IUserOrder[];
  name:
    | {
        name: string;
        surname: string;
      }
    | string;
}
