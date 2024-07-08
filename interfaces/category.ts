import { idType } from ".";

interface ICategoryChild {
  id: idType;
  title: string;
  parent: string;
}

export interface ICategory {
  id: idType;
  title: string;
  children: ICategoryChild[];
  icon: string;
}

export interface IProductCategory {
  id: idType;
  title: string;
}
