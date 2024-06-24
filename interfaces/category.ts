import { idType } from ".";

interface ICategoryChild {
  id: idType
  title: string
}

export interface ICategory {
  id: idType
  name: string
  children: ICategoryChild[]
  icon: string
}

export interface IProductCategory {
  id: idType;
  name: string
}
