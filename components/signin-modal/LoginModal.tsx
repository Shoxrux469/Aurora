"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import SignUpForm from "../signup-form/SignUpForm";
import { SessionProvider } from "next-auth/react";
import SignInForm from "../signin-form/SigninForm";
import { useTranslations } from "next-intl";

const LoginModal = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const t = useTranslations("Login");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out"
        >
          <LogIn size={20} />
          {t("title")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[380px]">
        <SessionProvider>
          {isLogged ? (
            <SignInForm setIsLogged={setIsLogged} />
          ) : (
            <SignUpForm setIsLogged={setIsLogged} />
          )}
        </SessionProvider>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
