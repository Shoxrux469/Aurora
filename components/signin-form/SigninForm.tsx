"use client";
import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import UsersService from "@/services/api/users";
import bcrypt from "bcryptjs";

import { signIn } from "next-auth/react";
import { Facebook, Linkedin } from "lucide-react";
import { toast } from "../ui/use-toast";
import { useTranslations } from "next-intl";
interface Props {
  setIsLogged: (logged: boolean) => void;
}

type Inputs = {
  email: string;
  password: string;
};

const SignInForm = ({ setIsLogged }: Props) => {
  const t = useTranslations("Login.sign-in");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleSingIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      throw error;
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    try {
      const userExist = await UsersService.getByEmail(user.email as string);

      if (userExist) {
        const isPasswordValid = await bcrypt.compare(
          user!.password,
          userExist!.password
        );

        if (isPasswordValid) {
          const res = await signIn("credentials", {
            email: user.email,
            password: user.password,
            redirect: false,
          });
          if (res?.ok) {
            window.location.reload();
          }
        } else {
          toast({
            title: "Неверный пароль!",
            description:
              "Введенный пароль был неверный, если вы забыли пароль восстановите его и повторите снова!",
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-3xl font-medium">
          {t("title")}
        </DialogTitle>
      </DialogHeader>

      <div className="flex items-center justify-center gap-5">
        <Button
          variant="outline"
          size="icon"
          className="p-2 rounded-full"
          onClick={handleSingIn}
        >
          <span className="text-zinc-500 text-xl">G</span>
        </Button>
        <Button variant="outline" size="icon" className="p-2 rounded-full">
          <Facebook color="#71717a" />
        </Button>
        <Button variant="outline" size="icon" className="p-2 rounded-full">
          <Linkedin color="#71717a" />
        </Button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input
            {...register("email", {
              required: t("email.required"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t("email.pattern"),
              },
            })}
            style={errors.email ? InputErrorStyle : undefined}
            id="email"
            placeholder={t("email.title")}
          />
          {errors.email && (
            <span role="alert" className="text-xs">
              {errors.email.message}
            </span>
          )}
          <Input
            {...register("password", {
              required: t("password.required"),
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: t("password.pattern"),
              },
              minLength: {
                value: 6,
                message: t("password.minLength"),
              },
            })}
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
            style={errors.password ? InputErrorStyle : undefined}
            placeholder={t("password.title")}
          />
          {errors.password && (
            <span role="alert" className="text-xs">
              {errors.password.message}
            </span>
          )}

          <Button type="submit" className="w-full" size="lg">
            {t("button")}
          </Button>
        </div>
      </form>

      <Link
        href="/reset"
        className="block w-fit mx-auto text-center text-sm text-blue-600"
      >
        {t("forgot-password")}
      </Link>

      <Separator />

      <DialogFooter>
        <div className="text-sm">
          {t("no-account")}&nbsp;
          <Button
            onClick={() => setIsLogged(false)}
            variant="link"
            className="text-sm px-0 text-blue-600"
          >
            {t("create-account")}
          </Button>
        </div>
      </DialogFooter>
    </>
  );
};

export default SignInForm;
