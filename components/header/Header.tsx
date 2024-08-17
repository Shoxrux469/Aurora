import Link from "next/link";
import React from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import {
  AlignJustify,
  Mountain,
  ShoppingBag,
  LayoutList,
  User2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import HeaderSearcher from "../header-searcher/HeaderSearcher";
import LoginModal from "../login-modal/LoginModal";
import Aside from "../aside/aside";
import { headerLinks, ShopName } from "@/constants";
import { getCurrentUser } from "@/lib/auth";

const Header = async () => {
  const user = await getCurrentUser();
  const SHEET_SIDES = ["left"] as const;

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
              {ShopName}
            </span>
            <Mountain size={24} className="text-primary" />
          </Link>
        </div>
        <HeaderSearcher />
        <div className="flex h-full item-center gap-2">
          <Link href="/cart" className={headerLinks}>
            <ShoppingBag size={20} />
            Корзина
          </Link>

          {user ? (
            <>
              <Link href="/user-info/profile" className={headerLinks}>
                <User2Icon size={20} />
                {user.name?.split(" ")[0]}
              </Link>
            </>
          ) : (
            <LoginModal />
          )}
          {user && (
            <Link href="/user-info/orders" className={headerLinks}>
              <LayoutList size={20} />
              Заказы
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
