import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetTrigger } from "../ui/sheet";
import Aside from "../aside/Aside";
import { cn } from "@/lib/utils";
import { AlignJustify, Search, Mountain } from "lucide-react";

const Header = () => {
  const SHEET_SIDES = ["left"] as const;

  return (
    <header className="bg-white">
      <div className="py-4 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-4">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger>
                <AlignJustify size={24} className={cn("text-green-600")} />
              </SheetTrigger>
              <Aside side={side} />
            </Sheet>
          ))}
          <Link className="flex items-center" href="/">
            <span className="mr-2 text-primary font-bold">Fitness</span>
            <Mountain size={24} className="text-primary" />
          </Link>
        </div>
        <div className="relative w-full max-w-md">
          <Input
            className="w-full rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search products..."
            type="text"
          />
          <Button
            className="absolute right-2 top-1/2 -translate-y-1/2"
            size="icon"
            variant="ghost"
          >
            <Search size={20} className=" text-gray-500" />
          </Button>
        </div>

        <Link className="text-primary font-medium" href="#">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
