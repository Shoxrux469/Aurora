"use client";

import { useRouter, usePathname } from "next/navigation";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const HeaderLangSelector = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the current locale from the pathname
  const currentLocale = pathname.split("/")[1] || "en";

  const handleValueChange = (value: string) => {
    // Replace the current locale in the pathname with the new value
    const newPath = `/${value}${pathname.substring(currentLocale.length + 1)}`;
    router.replace(newPath);
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue={currentLocale}>
      <SelectTrigger className="pr-3 w-fit relative">
        <SelectValue placeholder={currentLocale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="w-fit">
        <SelectItem value="en">En</SelectItem>
        <SelectItem value="ru">Ru</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default HeaderLangSelector;
