import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import UsersService from "@/services/api/users";
import { toast } from "../ui/use-toast";

interface Props {
  setIsLogged: (logged: boolean) => void;
}

type Inputs = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const SignUpForm = ({ setIsLogged }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (user) => {
    try {
      const userExist = await UsersService.getByEmail(user.email);

      if (!userExist) {
        await UsersService.postUser(user);
        toast({
          title: "Успешно!",
          description:
            "Регистрация прошла успешно, теперь в можете войти в аккаунт!",
          variant: "default",
        });
        reset();
      } else {
        toast({
          title: "Ошибка!",
          description: "Пользователь с таким эмайлом уже существует!",
          variant: "destructive",
        });
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
          Регистрация
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
            // aria-invalid={errors.name ? "true" : "false"}
            id={"name"}
            placeholder="Имя"
          />
          {errors.name?.type === "required" && (
            <span role="alert" className="text-xs">
              Name is required
            </span>
          )}
          <Input
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
            style={
              errors.email?.type === "pattern" ? InputErrorStyle : undefined
            }
            id={"email"}
            // aria-invalid={errors.email ? "true" : "false"}
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
            // aria-invalid={errors.password ? "true" : "false"}
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
            Зарегистрироваться
          </Button>
        </div>
      </form>
      <Separator />
      <DialogFooter>
        <div className="text-sm">
          У вас уже есть аккаунт? &nbsp;
          <Button
            onClick={() => setIsLogged(true)}
            variant="link"
            className="text-sm px-0 text-blue-600"
          >
            Войти в аккаунт
          </Button>
        </div>
      </DialogFooter>
    </>
  );
};

export default SignUpForm;
