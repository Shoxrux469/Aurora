import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { AlignJustify, Search, Mountain, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import HeaderSearcher from "../header-searcher/HeaderSearcher";
import LoginModal from "../login-modal/LoginModal";
import Aside from "../aside/aside";

const Header = () => {
  const SHEET_SIDES = ["left"] as const;

  const buttonsClass =
    "flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out";

  return (
    <header className="bg-white px-8">
      <div className="py-4 flex items-center justify-between">
        <div className="hidden lg:flex items-center gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger>
                <AlignJustify size={24} className={cn("text-primary")} />
              </SheetTrigger>
              <Aside side={side} />
            </Sheet>
          ))}
          <Link className="flex items-center" href="/">
            <span className="mr-1 text-primary text-xl font-bold">
              TechShop
            </span>
            <Mountain size={24} className="text-primary" />
          </Link>
        </div>
        <HeaderSearcher />
        <div className="flex h-full item-center gap-2">
          <LoginModal />
          <Link
            href="/cart"
            className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out hover:bg-accent hover:text-accent-foreground"
          >
            <ShoppingBag size={20} />
            Корзина
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
