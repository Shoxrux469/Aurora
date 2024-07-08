import { idType } from ".";
import { IProductCategory } from "./category";

interface IProductAttributes {
  color: string;
  brand?: string;
  size?: string | number;
  material?: string;
  model?: string;
  weight?: number | string;
}

export interface IProduct {
  id: idType;
  category: IProductCategory;
  attributes: IProductAttributes;
  images_links: string[];
  price: number;
  title: string;
  quantity: number;
  description: string;
}
