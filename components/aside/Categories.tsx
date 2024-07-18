"use client";

import SubCategories from "./SubCategories";
import React, { useState } from "react";
import { ICategory, ICategoryChild } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  Watch,
  Gamepad2,
  Headphones,
  Laptop,
  Mountain,
  ArrowLeft,
} from "lucide-react";

type ICategoryIcons = {
  [key: string]: JSX.Element;
};

interface ICategoryState {
  categoryTitle: string;
  categoryChild: ICategoryChild[];
}

const Categories = ({ categories }: { categories: ICategory[] }) => {
  const [isChild, setIsChild] = useState<ICategoryState | null>(null);

  let categoryIconClass = cn("opacity-70 text-primary");

  const categoriesIcons: ICategoryIcons = {
    "Умные часы и фитнес браслеты": (
      <Watch size={20} className={categoryIconClass} />
    ),
    Игровое: <Gamepad2 size={20} className={categoryIconClass} />,
    "Наушники и аудиотехника": (
      <Headphones size={20} className={categoryIconClass} />
    ),
    "Компьютерная техника": <Laptop size={20} className={categoryIconClass} />,
  };

  const transitionVariants = {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isChild === null ? (
          <motion.div
            key="categories"
            initial="exit"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-4 mb-3 space-y-2">
              <div className="flex text-primary items-end">
                <Mountain size={42} />
                <h2 className="text-3xl ml-1">Fitness</h2>
              </div>
              <p className="text-lg text-balance">
                Откройте для себя совершенство с каждой покупкой
              </p>
            </div>
            <ul className="text-lg flex flex-col gap-3">
              {categories.map((category, i) => (
                <li
                  key={i}
                  onClick={() =>
                    setIsChild({
                      categoryChild: category.subcategories,
                      categoryTitle: category.title,
                    })
                  }
                  className="hover:opacity-75 ease-in-out duration-150 cursor-pointer flex items-center justify-between group"
                >
                  <span className="flex items-center text-balance justify-center gap-2">
                    {categoriesIcons[category.title]}
                    {category.title}
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
          </motion.div>
        ) : (
          <motion.div
            key="subcategories"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={transitionVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="flex py-2 border-b-2 border-zinc-300 items-center gap-2 mt-4">
              <ArrowLeft
                size={25}
                onClick={() => setIsChild(null)}
                className="cursor-pointer text-primary"
              />
              <h2 className="text-xl text-balance">Главное меню</h2>
            </div>
            <h1 className="text-2xl text-balance mt-2 font-semibold">
              {isChild.categoryTitle}
            </h1>
            <SubCategories subcategories={isChild.categoryChild} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Categories;
