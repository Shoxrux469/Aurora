"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { IUser } from "@/interfaces/user";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { InputErrorStyle } from "@/constants";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import SignOut from "../signout/Signout";

type FormData = {
  surname: string;
  name: string;
  middlename: string;
  birthDate: string;
  gender: "Мужской" | "Женский" | undefined;
  email: string;
  phone: string;
};

const MyDataForm = ({ user }: { user: IUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [gender, setGender] = useState<"Мужской" | "Женский" | undefined>(
    user.gender
  );

  const onSubmit = (data: FormData) => {
    const formDataWithGender = { ...data, gender };
    console.log(formDataWithGender);
  };

  const inputStyles = "text-lg border rounded-xl w-full h-12";

  const inputDiv = "flex flex-col space-y-2 w-1/3";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-4 sm:p-6 md:p-0"
    >
      <div className="flex items-center gap-10">
        <div className={inputDiv}>
          <label htmlFor="surname">Фамилия</label>
          <Input
            className={inputStyles}
            {...register("surname", {
              required: false,
              minLength: 2,
              maxLength: 25,
            })}
            defaultValue={user?.surname}
            id={"surname"}
          />
        </div>
        <div className={inputDiv}>
          <label htmlFor="name">Имя*</label>
          <Input
            className={inputStyles}
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
            defaultValue={user?.name}
            id={"name"}
          />
        </div>
        <div className={inputDiv}>
          <label htmlFor="middlename">Отчество</label>
          <Input
            className={inputStyles}
            {...register("middlename", {
              required: false,
              minLength: 3,
              maxLength: 15,
            })}
            defaultValue={user?.middlename}
            id={"middlename"}
          />
        </div>
      </div>
      <div className="flex items-center gap-10 w-11/12">
        <div className={inputDiv}>
          <label htmlFor="birthDate">Дата рождения</label>
          <Input
            className={inputStyles}
            {...register("birthDate", {
              required: false,
              minLength: 3,
              maxLength: 15,
            })}
            placeholder="дд/мм/гггг"
            defaultValue={user?.middlename}
            id={"birthDate"}
          />
        </div>
        <Tabs
          className={inputDiv}
          onValueChange={(value) => setGender(value as "Мужской" | "Женский")}
          value={gender || undefined}
        >
          <div>Пол</div>
          <TabsList className="w-fit text-xl h-12">
            <TabsTrigger className="h-11 text-lg" value="Женский">
              Женский
            </TabsTrigger>
            <TabsTrigger className="h-11 text-lg" value="Мужской">
              Мужской
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center gap-10 w-11/12">
        <div className={inputDiv}>
          <label htmlFor="email">Электронная почта*</label>
          <Input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Введите действительный адрес электронной почты",
              },
            })}
            className={inputStyles}
            style={errors.email ? InputErrorStyle : undefined}
            defaultValue={user.email}
            id="email"
            placeholder="Эмайл"
          />
        </div>
        <div className={inputDiv}>
          <label htmlFor="phone"> Номер телефона</label>
          <Input
            {...register("phone", {
              required: "Email Address is required",
              pattern: {
                value:
                  /^\+?[0-9]{1,3}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}$/,
                message: "Введите действительный адрес электронной почты",
              },
            })}
            className={inputStyles}
            defaultValue={user.phone || "+998"}
            style={errors.email ? InputErrorStyle : undefined}
            id="phone"
          />
        </div>
      </div>
      <div className="pt-6">
        <SignOut />
      </div>
    </form>
  );
};

export default MyDataForm;
