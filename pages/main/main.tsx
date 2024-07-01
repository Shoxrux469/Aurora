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
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allProds?.map((prod: IProduct, i: number) => (
            <CreateProd key={i} prod={prod}></CreateProd>
          ))} 
        </div>
      </section>
    </div>
  );
};
