import { idType } from ".";
import { IProductCategory } from "./category";


export interface IPromoContent {
  title: string
  description: string
  color: string
}

export interface IProduct {
  id: idType;
  categories: IProductCategory;
  promo_content: IPromoContent
  images_links: string[];
  price: number;
  size?: number | string | null;
}

// let user = {
//   id: 1,
//   username: "example_user",
//   email: "user@example.com",
//   cart: {
//     id: 101,
//     items: [
//       {
//         product_id: 1,
//         quantity: 2,
//         name: "Product 1",
//         price: 50.0
//       },
//       {
//         product_id: 2,
//         name: "Product 2",
//         quantity: 1,
//         price: 100.0
//       }
//     ],
//     total_price: 200.0
//   },
//   orders: [
//     {
//       order_id: 1001,
//       status: "completed",
//       total_price: 150.0,
//     }
//   ]
// }
