import { idType } from ".";

export interface ICategoryChild {
  id: idType;
  title: string;
  parent: string;
}

export interface ICategory {
  id: idType;
  title: string;
  subcategories: ICategoryChild[];
  icon: string;
}

export interface IProductCategory {
  id: idType;
  title: string;
}
