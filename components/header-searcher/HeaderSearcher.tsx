"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const HeaderSearcher = () => {
  const router = useRouter();

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      router.push(`/filteredProducts?text=${e.target.value}`);
      // <SearchPage /arr={searchHintGoods} />
      // navigate("/searcher", { state: { arr: searchHintGoods } })
    }
  };
  return (
    <div className="relative w-full max-w-2xl">
      <Input
        className="w-full h-10 rounded-lg text-base px-4 relative z-20 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Search products..."
        onKeyUp={handleKeyUp}
      />
      <Button
        className="absolute rounded-lg h-full shadow-none w-12 right-0 z-10 top-1/2 -translate-y-1/2"
        size="icon"
        variant="secondary"
      >
        <Search size={20} className="text-gray-500" />
      </Button>
    </div>
  );
};

export default HeaderSearcher;
