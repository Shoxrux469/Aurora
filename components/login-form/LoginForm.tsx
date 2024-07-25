import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import { useToast } from "../ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { authOptions } from "@/lib/auth";
interface Props {
  setIsLogged: (logged: boolean) => void;
}

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = ({ setIsLogged }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { toast } = useToast();
  const { data: session } = useSession();

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    const res = await signIn("credentials", {
      email: user.email,
      password: user.password,
      redirect: true,
    });

    console.log(res);
  };

  console.log(session);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center mb-3 text-3xl font-medium">
          Вход в аккаунт
        </DialogTitle>
      </DialogHeader>

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

export default LoginForm;
