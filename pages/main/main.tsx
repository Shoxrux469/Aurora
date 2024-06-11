"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainSwiper from "../../components/swiper/Swiper";

export function Main() {
  return (
    <div className="bg-white">
      <Header />
      <MainSwiper />
      <section className="mx-auto py-12">
        <h3 className="text-3xl font-bold text-center">Best Sellers</h3>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm mx-auto">
            <div className="bg-gray-100">
              <Image
                alt="Product"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
            <div className="py-4">
              <h4 className="text-lg font-bold">Product Name</h4>
              <p className="text-gray-600">
                Short product description goes here.
              </p>
              <Button className="mt-3">View Product</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
