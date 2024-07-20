import { ICategoryChild } from "@/interfaces/category";
import React from "react";
import { useRouter } from "next/navigation";

const AsideSubcategories = ({
  subcategories,
}: {
  subcategories: ICategoryChild[];
}) => {
  const router = useRouter();

  return (
    <>
      <ul className="mt-3">
        {subcategories.map((subcategory, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-between group"
          >
            <button
              onClick={() =>
                router.push(`/filteredProducts/id/${subcategory.id}`)
              }
              className="flex items-center hover:opacity-75 ease-in-out duration-150 text-balance text-lg justify-center gap-3"
            >
              {subcategory.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AsideSubcategories;
