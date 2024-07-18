import { idType } from ".";
import { IProductCategory } from "./category";

interface IProductAttributes {
  color: string
  specific?: string[]
}

export interface IProduct {
  id?: idType
  category: IProductCategory
  attributes: IProductAttributes
  images_links: string[]
  title: string
  description: string
  price: number
  quantity: number
}





