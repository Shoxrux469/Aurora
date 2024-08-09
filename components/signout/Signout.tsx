"use client";

import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const SignOut = () => {
  return (
    <Button
      variant="ghost"
      size="default"
      className="flex items-center h-full text-zinc-800 gap-2 py-2 px-2 duration-150 ease-in-out"
      onClick={() => signOut()}
    >
      <LogOutIcon size={20} />
      Выйти
    </Button>
  );
};

export default SignOut;
