import Link from "next/link";
import React from "react";
import { MenuIcon, MountainIcon, SearchIcon } from "../footer/footerIcons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetTrigger } from "../ui/sheet";
import Aside from "../aside/aside";
import { cn } from "@/lib/utils";

const Header = () => {
  const SHEET_SIDES = ["left"] as const;

  return (
    <header className="bg-white">
      <div className="py-4 flex items-center justify-between">
        <Link className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-primary font-bold">Fitness</span>
        </Link>
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
  );
};

export default Header;
