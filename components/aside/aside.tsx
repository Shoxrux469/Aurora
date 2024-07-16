import { SheetContent } from "@/components/ui/sheet";
import Categories from "./categories";
import { useState } from "react";

const Aside = ({ side }: { side: "left" }) => {
  return (
    <SheetContent
      side={side}
      className="flex flex-col rounded-tr-lg rounded-br-lg"
    >
      <Categories />
    </SheetContent>
  );
};

export default Aside;

// <li
//   key={ix}
//   // onClick={}
//   className="hover:opacity-75 ease-in-out duration-150 cursor-pointer flex items-center justify-between group"
// >
//   <span className="flex items-center text-balance justify-center gap-2">
//     {categoriesIcons[category.title]}
//     <>{category.subcategories}</>
//   </span>
//   <ArrowRight
//     size={24}
//     className={cn(
//       "text-primary transition-transform duration-150 group-hover:translate-x-1"
//     )}
//   />
// </li>
