import React from "react";
import { ICategory } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import CategoriesService from "@/services/api/categories";

import { ArrowRight, Watch, Gamepad2, Headphones, Laptop, Mountain } from "lucide-react";
import { SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";

type ICategoryIcons = {
  [key: string]: JSX.Element;
};

const Categories = async () => {
  let categories = (await CategoriesService.getAll()) as ICategory[];

  let categoryiconClass = cn("opacity-70 text-primary");

  const categoriesIcons: ICategoryIcons = {
    "Умные часы и фитнес браслеты": (
      <Watch size={20} className={categoryiconClass} />
    ),
    Игровое: <Gamepad2 size={20} className={categoryiconClass} />,
    "Наушники и аудиотехника": (
      <Headphones size={20} className={categoryiconClass} />
    ),
    "Компьютерная техника": <Laptop size={20} className={categoryiconClass} />,
  };
  return (
    <>
      <SheetHeader className="my-4">
        <SheetTitle className="flex text-primary items-end">
          <Mountain size={42} />
          <span className="text-3xl ml-1">Fitness</span>
        </SheetTitle>
        <SheetDescription className="text-lg text-balance">
          Откройте для себя совершенство с каждой покупкой
        </SheetDescription>
      </SheetHeader>
      <ul className="text-lg flex flex-col gap-3">
        {categories.map((category, i) => (
          <li
            key={i}
            // onClick={}
            className="hover:opacity-75 ease-in-out duration-150 cursor-pointer flex items-center justify-between group"
          >
            <span className="flex items-center text-balance justify-center gap-2">
              {categoriesIcons[category.title]}
              <>{category.title}</>
            </span>
            <ArrowRight
              size={24}
              className={cn(
                "text-primary transition-transform duration-150 group-hover:translate-x-1"
              )}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
