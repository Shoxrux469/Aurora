import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import { useToast } from "../ui/use-toast";
import UsersService from "@/services/api/users";

import { signIn, useSession } from "next-auth/react";
import { Facebook, Linkedin } from "lucide-react";
interface Props {
  setIsLogged: (logged: boolean) => void;
}

type Inputs = {
  email: string;
  password: string;
};

const SignUpForm = ({ setIsLogged }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { toast } = useToast();
  // const { data: session } = useSession();

  const socialButtons = [
    {
      icon: <span className="text-zinc-500 text-xl">G</span>,
      ariaLabel: "Google",
    },
    { icon: <Facebook color="#71717a" />, ariaLabel: "Facebook" },
    { icon: <Linkedin color="#71717a" />, ariaLabel: "LinkedIn" },
  ];

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    try {
      const res = await signIn("credentials", {
        email: user.email,
        password: user.password,
        redirect: false,
      });
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
    // let relatedProducts = await UsersService.getByEmail("test@gmail.com");
    // console.log(relatedProducts);
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center mb-3 text-3xl font-medium">
          Вход в аккаунт
        </DialogTitle>
      </DialogHeader>

      <div className="flex items-center justify-center gap-5">
        {socialButtons.map(({ icon, ariaLabel }, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="p-2 rounded-full"
            onClick={() => signIn("google")}
          >
            {icon}
          </Button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Введите действительный адрес электронной почты",
              },
            })}
            style={errors.email ? InputErrorStyle : undefined}
            id="email"
            placeholder="Эмайл"
          />
          {errors.email && (
            <span role="alert" className="text-xs">
              {errors.email.message}
            </span>
          )}
          <Input
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Пароль должен содержать как минимум 8 символов, включая буквы и цифры",
              },
              minLength: {
                value: 6,
                message: "Пароль должен быть не менее 6 символов",
              },
            })}
            id="password"
            aria-invalid={errors.password ? "true" : "false"}
            style={errors.password ? InputErrorStyle : undefined}
            placeholder="Пароль"
          />
          {errors.password && (
            <span role="alert" className="text-xs">
              {errors.password.message}
            </span>
          )}

          <Button type="submit" className="w-full" size="lg">
            Войти
          </Button>
        </div>
      </form>

      <Link
        href="/reset"
        className="block w-fit mx-auto text-center text-sm text-blue-600"
      >
        Забыли пароль?
      </Link>
      <Separator />
      <DialogFooter>
        <div className="text-sm">
          У вас нет аккаунта? &nbsp;
          <Button
            onClick={() => setIsLogged(false)}
            variant="link"
            className="text-sm px-0 text-blue-600"
          >
            Создать аккаунт
          </Button>
        </div>
      </DialogFooter>
    </>
  );
};

export default SignUpForm;
