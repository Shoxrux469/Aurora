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
import LoginModal from "../signin-modal/LoginModal";
import Aside from "../aside/aside";
import { headerLinks, ShopName } from "@/constants";
import { getCurrentUser } from "@/lib/auth";
import { addLocalePrefix } from "@/utils/addLocalePrefix";
import { getTranslations } from "next-intl/server";
import HeaderLangSelector from "../header-lang-selector/HeaderLangSelector";

const Header = async ({ currentLocale }: { currentLocale: string }) => {
  const user = await getCurrentUser();
  const SHEET_SIDES = ["left"] as const;
  const t = await getTranslations("Header");

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
          <Link
            className="flex items-center"
            href={addLocalePrefix("/", currentLocale)}
          >
            <span className="mr-1 text-primary text-xl font-bold">
              {ShopName}
            </span>
            <Mountain size={24} className="text-primary" />
          </Link>
        </div>
        <HeaderSearcher />
        <div className="flex h-full item-center gap-2">
          <Link
            href={addLocalePrefix("/cart", currentLocale)}
            className={headerLinks}
          >
            <ShoppingBag size={20} />
            {t("cart")}
          </Link>

          {user ? (
            <>
              <Link
                href={addLocalePrefix("/user-info/profile", currentLocale)}
                className={headerLinks}
              >
                <User2Icon size={20} />
                {user.name?.split(" ")[0]}
              </Link>
            </>
          ) : (
            <LoginModal />
          )}
          {user && (
            <Link
              href={addLocalePrefix("/user-info/orders", currentLocale)}
              className={headerLinks}
            >
              <LayoutList size={20} />
              {t("orders")}
            </Link>
          )}
        </div>
        <HeaderLangSelector />
      </div>
    </header>
  );
};

export default Header;
