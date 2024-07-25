import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { SubmitHandler, useForm } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import UsersService from "@/services/api/users";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";

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

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    const result = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (result?.error) {
      toast({
        title: "Ошибка входа",
        description: result.error,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Успешный вход",
        description: "Вы успешно вошли в аккаунт",
        variant: "default",
      });
    }
  };

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
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            style={
              errors.email?.type === "pattern" ? InputErrorStyle : undefined
            }
            id={"email"}
            placeholder="Эмайл"
          />
          {errors.email?.type === "required" && (
            <span role="alert" className="text-xs">
              Email Address is required
            </span>
          )}
          <Input
            {...register("password", {
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              minLength: 6,
            })}
            id={"password"}
            aria-invalid={errors.password ? "true" : "false"}
            style={
              errors.password?.type === "pattern" ? InputErrorStyle : undefined
            }
            placeholder="Пароль"
          />
          {errors.password?.type === "required" && (
            <span role="alert" className="text-xs mt-0">
              Password is required
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
