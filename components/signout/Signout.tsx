"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const t = useTranslations("User-info.profile.profile-form");
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    window.location.href = "/";
    router.replace("/");
  };

  return (
    <Button
      variant="ghost"
      size="default"
      className="rounded-xl flex items-center h-full text-lg text-zinc-800 gap-2 py-3 px-6 duration-150 ease-in-out"
      onClick={handleSignOut}
    >
      <LogOutIcon size={20} />
      {t("log-out")} {/* Use the translated text */}
    </Button>
  );
};

export default SignOut;
