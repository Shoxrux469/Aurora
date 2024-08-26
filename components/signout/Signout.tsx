"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl"; // Import the translation hook

const SignOut = () => {
  const t = useTranslations("User-info.profile.profile-form"); // Access the translations for the profile form

  return (
    <Button
      variant="ghost"
      size="default"
      className="rounded-xl flex items-center h-full text-lg text-zinc-800 gap-2 py-3 px-6 duration-150 ease-in-out"
      onClick={() => signOut()}
    >
      <LogOutIcon size={20} />
      {t("log-out")} {/* Use the translated text */}
    </Button>
  );
};

export default SignOut;
