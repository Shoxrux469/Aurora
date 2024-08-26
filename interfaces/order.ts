import { idType } from ".";
import { ICartProduct } from "./product";

type Address = string;

type PaymentMethod = "credit_card" | "master" | "cash_on_delivery";

export interface IOrder {
  items: ICartProduct[];
  address: Address;
  paymentMethod: PaymentMethod;
  totalPrice: number;
  userId: idType;
}