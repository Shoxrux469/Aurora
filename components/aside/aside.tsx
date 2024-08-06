"use server";
import { SheetContent } from "@/components/ui/sheet";
import { ICategory } from "@/interfaces/category";
import CategoriesService from "@/services/api/categories";
import AsideCategories from "../aside-categories/AsideCategories";
import Loading from "@/app/loading";

const Aside = async ({ side }: { side: "left" }) => {
  let categories: ICategory[] = await CategoriesService.getAll((progress) => (
    <Loading value={progress} />
  ));

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
