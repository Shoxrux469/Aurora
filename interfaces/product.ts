import { IImage, idType } from ".";

export interface IProductPrice {
  created_at: string;
  id: idType;
  old_price: string
  price: number;
  product_id: idType;
}

export interface IPromoContent {
  id?: idType
  description: string
  product_id: idType
  image_full: string
  title: string
  // image_id: idType
  // image: IImage
}

export interface IProduct {
  id: idType;
  categories: string;
  promo_contents: IPromoContent[]
  images_links: string[];
  color_product: string | null;
  createTime: string | null;
  updateTime: string | null;
  // prices: IProductPrice[];
  // size_product: number | string | null;
}

// {
//   id: 'dW2dsq4e',
//   categories: 'furniture',
//
//   images_links: ['image 1', 'image 2'],
//   color_product: 'серый',
//   createTime: '2024-06-13T08:54:56.997763Z',
//   updateTime: '2024-06-13T09:26:19.524156Z'
// }