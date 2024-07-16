"use server";
import { SheetContent } from "@/components/ui/sheet";
import SubCategories from "./SubCategories";
import React, { useState } from "react";
import { ICategory, ICategoryChild } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import CategoriesService from "@/services/api/categories";

import Categories from "./Categories";

const Aside = async ({ side }: { side: "left" }) => {
  let categories: ICategory[] = await CategoriesService.getAll();

  return (
    <SheetContent
      side={side}
      className="flex bg-zinc-100 flex-col overflow-hidden rounded-tr-lg rounded-br-lg"
    >
      <Categories categories={categories} />
    </SheetContent>
  );
};

export default Aside;
