"use client";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const SignOut = ({ locale }: { locale: string }) => {
  const t = useTranslations("User-info.profile.profile-form");
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";

  const handleSignOut = () => {
    // window.location.href = `/${currentLocale}`;
    // router.replace(`/${currentLocale}`);
    signOut({ callbackUrl: `/${currentLocale}` });
    // signOut();
  };

  return (
    <Button
      variant="ghost"
      size="default"
      className="rounded-xl flex items-center h-full text-lg text-zinc-800 gap-2 py-3 px-6 duration-150 ease-in-out"
      onClick={handleSignOut}
    >
      <LogOutIcon size={20} />
      {t("log-out")}
    </Button>
  );
};

export default SignOut;
