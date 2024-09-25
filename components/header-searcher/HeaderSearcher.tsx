"use client";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const HeaderSearcher = ({ currentLocale }: { currentLocale: string }) => {
  const router = useRouter();

  const t = useTranslations("Header.searcher");

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const text = e.currentTarget.value;
      router.push(
        `/${currentLocale}/filteredProducts/text/${encodeURIComponent(text)}`
      );
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <Input
        className="w-full h-10 rounded-lg text-base px-4 relative z-20 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={t("placeholder")}
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
