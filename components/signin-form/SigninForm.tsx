import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Facebook, Linkedin } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputErrorStyle } from "@/constants";
import UsersService from "@/services/api/users";
import { User } from "next-auth";
import { useToast } from "../ui/use-toast";
import { signIn } from "next-auth/react";

interface Props {
  setIsLogged: (logged: boolean) => void;
}

type Inputs = {
  id: string;
  name: string;
  email: string;
  password: string;
};

const SigninForm = ({ setIsLogged }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { toast } = useToast();

  const socialButtons = [
    {
      icon: <span className="text-zinc-500 text-xl">G</span>,
      ariaLabel: "Google",
    },
    { icon: <Facebook color="#71717a" />, ariaLabel: "Facebook" },
    { icon: <Linkedin color="#71717a" />, ariaLabel: "LinkedIn" },
  ];

  const onSubmit: SubmitHandler<Inputs> = async (data: User) => {
    console.log(data);

    // try {
    //   signIn("credentials");
    // } catch (error) {
    //   toast({
    //     title: "Ошибка",
    //     description: "Произошла ошибка при проверке существования пользователя",
    //     variant: "destructive",
    //   });
    // }
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-center text-3xl font-medium">
          Регистрация
        </DialogTitle>
      </DialogHeader>

      <div className="flex items-center justify-center gap-5">
        {socialButtons.map(({ icon, ariaLabel }, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="p-2 rounded-full"
            aria-label={ariaLabel}
          >
            {icon}
          </Button>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-5">
          <Input
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
            // aria-invalid={errors.name ? "true" : "false"}
            placeholder="Имя"
            id={"name"}
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
          <Button className="w-full" size="lg">
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

export default SigninForm;
