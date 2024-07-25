"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import LoginForm from "../login-form/LoginForm";
import SigninForm from "../signin-form/SigninForm";

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
        {isLogged ? (
          <LoginForm setIsLogged={setIsLogged} />
        ) : (
          <SigninForm setIsLogged={setIsLogged} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
