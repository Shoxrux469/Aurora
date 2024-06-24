"use client";

import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainSwiper from "../../components/swiper/Swiper";
import { IProduct } from "@/interfaces/product";
import CreateProd from "@/components/createProd/CreateProd";
import useRequest from "@/hooks/useRequest";
import { execFileSync } from "child_process";

export const Main = () => {
  const [allProds, setAllProds] = useState<IProduct[]>();
  const { getAllProducts } = useRequest();
  useEffect(() => {
    getAllProducts()
      .then((res: IProduct[]) => {
        setAllProds(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getAllProducts]);
  return (
    <div className="bg-white">
      <Header />
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allProds?.map((prod: IProduct, i: number) => (
            <CreateProd key={i} prod={prod}></CreateProd>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

interface categories {
  id: number;
  name: "furniture";
  children: [
    {
      id: number;
      title: string;
      parent: "furniture";
      color: string;
      icon: number;
    }
  ];
  icon: [];
}

interface products {
  id: number;
  category: {
    title: "furniture";
    id: number;
    children: [
      {
        // parent: "furniture"
        id: number;
      },
      {
        // parent: "furniture"
        id: number;
      }
    ];
  };
  qty: number | null;
  image_links: [];
  // orderId: number;
  // userId: number;
  discount?: number;
}

interface user {
  id: number;
  name: "Alex";
  email: string;
  password: string;
  cart: {
    id: number;
    userId: number;
    qnty: number;
    items: [
      {
        id: number;
        productId: number;
        qty: number;
      }
    ];
    totalPrice: number;
  };
  orders: number;
}

let user = {
  id: 1,
  username: "example_user",
  email: "user@example.com",
  cart: {
    id: 101,
    items: [
      {
        product_id: 1,
        quantity: 2,
      },
      {
        product_id: 2,
        quantity: 1,
      },
    ],
    total_price: 200.0,
  },
  orders: [
    {
      order_id: 1001,
      status: "completed",
      total_price: 150.0,
    },
  ],
};

// {
//   category: 1
//   // category: "furniture"
// }

// // axios.getProds("products?category=", "furniture").then()
