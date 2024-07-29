"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import SignInForm from "../signin-form/SignInForm";
import SignUpForm from "../signup-form/SignUpForm";
import { SessionProvider, signIn } from "next-auth/react";

const LoginModal = () => {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="default"
          className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out"
        >
          <LogIn size={20} />
          Войти
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
