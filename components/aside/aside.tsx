"use server";
import { SheetContent } from "@/components/ui/sheet";
import { ICategory } from "@/interfaces/category";
import CategoriesService from "@/services/api/categories";
import AsideCategories from "../aside-categories/AsideCategories";

const Aside = async ({ side }: { side: "left" }) => {
  let categories: ICategory[] = await CategoriesService.getAll();

  return (
    <SheetContent
      side={side}
      className="flex bg-zinc-100 flex-col overflow-hidden rounded-tr-lg rounded-br-lg"
    >
      <AsideCategories categories={categories} />
    </SheetContent>
  );
};

export default Aside;
