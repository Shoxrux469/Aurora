"use client";

import { Button } from "@/components/ui/button";
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import { MenuIcon, MountainIcon, SearchIcon } from "../footer/footerIcons";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import Footer from "../footer/Footer";
import { cn } from "@/lib/utils";
import Aside from "../aside/aside";

export function Main() {
  const SHEET_SIDES = ["left"] as const;

  return (
    <div className="bg-white">
      <header className="bg-white">
        <div className="py-4 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="ml-2 text-primary font-bold">Fitness</span>
          </Link>
          <div className="relative w-full max-w-md">
            <Input
              className="w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#004643]"
              placeholder="Search products..."
              type="text"
            />
            <Button
              className="absolute right-2 top-1/2 -translate-y-1/2"
              size="icon"
              variant="ghost"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Link className="text-primary font-medium" href="#">
              Contact
            </Link>
            {SHEET_SIDES.map((side) => (
              <Sheet key={side}>
                <Button size="icon" variant="ghost">
                  <SheetTrigger>
                    <MenuIcon className={cn("h-6 w-6 text-green-600")} />
                  </SheetTrigger>
                  <Aside side={side} />
                </Button>
              </Sheet>
            ))}
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden bg-green-600">
        <div className="container mx-auto px-6 py-12 text-white">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="order-2 mt-6 lg:order-1 lg:mt-0">
              <h2 className="text-5xl font-bold">Spring Collection</h2>
              <p className="mt-4 text-xl">
                Discover our brand new range of fitness equipment.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-full h-[300px] bg-gray-300" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>
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
