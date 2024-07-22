import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Sheet, SheetTrigger } from "../ui/sheet";
import {
  AlignJustify,
  Search,
  Mountain,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Aside from "../aside/Aside";
import LoginForm from "../login-form/LoginForm";

const Header = () => {
  const SHEET_SIDES = ["left"] as const;

  const buttonsClass =
    "flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out";

  return (
    <header className="bg-white">
      <div className="py-4 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger>
                <AlignJustify size={24} className={cn("text-green-600")} />
              </SheetTrigger>
              <Aside side={side} />
            </Sheet>
          ))}
          <Link className="flex items-center" href="/">
            <span className="mr-1 text-primary text-xl font-bold">Fitness</span>
            <Mountain size={24} className="text-primary" />
          </Link>
        </div>
        <div className="relative w-full max-w-2xl">
          <Input
            className="w-full h-10 rounded-lg text-base px-4 relative z-20 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Search products..."
            type="text"
          />
          <Button
            className="absolute rounded-lg h-full shadow-none w-12 right-0 z-10 top-1/2 -translate-y-1/2"
            size="icon"
            variant="secondary"
          >
            <Search size={20} className="text-gray-500" />
          </Button>
        </div>
        <div className="flex h-full item-center gap-2">
          <LoginForm />
          <Link
            href='/cart'
            className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out hover:bg-accent hover:text-accent-foreground">
            <ShoppingBag size={20} />
            Корзина
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
