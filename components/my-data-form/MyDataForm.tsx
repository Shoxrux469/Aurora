"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { IUser, IUserPatchForm, UserGender } from "@/interfaces/user";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { InputErrorStyle } from "@/constants";
import SignOut from "../signout/Signout";
import "./index.css";
import { Button } from "../ui/button";
import UsersService from "@/services/api/users";

const MyDataForm = ({ user }: { user: IUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPatchForm>();
  const [gender, setGender] = useState<UserGender>(user.gender || "");

  // console.log(user);

  const onSubmit = async (data: IUserPatchForm) => {
    const isUser = await UsersService.getByEmail(user.email);

    const res: IUserPatchForm = {
      ...data,
      gender,
      id: isUser!.id,
      password: isUser!.password,
    };

    await UsersService.patchUser(res);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-4 sm:p-6 md:p-0"
    >
      <div className="flex items-center gap-10">
        <div className="inputDiv">
          <label htmlFor="surname">Фамилия</label>
          <Input
            className="inputStyles"
            {...register("surname", {
              required: false,
              minLength: 2,
              maxLength: 25,
            })}
            defaultValue={user?.surname}
            id={"surname"}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="name">Имя*</label>
          <Input
            className="inputStyles"
            {...register("name", {
              required: true,
              minLength: 3,
              maxLength: 15,
            })}
            defaultValue={user?.name}
            id={"name"}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="middlename">Отчество</label>
          <Input
            className="inputStyles"
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
        <div className="inputDiv">
          <label htmlFor="birthdate">Дата рождения</label>
          <Input
            className="inputStyles"
            {...register("birthdate", {
              required: false,
              minLength: 3,
              maxLength: 15,
            })}
            placeholder="дд/мм/гггг"
            defaultValue={user?.middlename}
            id={"birthdate"}
          />
        </div>
        <Tabs
          className="inputDiv"
          onValueChange={(value) => setGender(value as "Мужской" | "Женский")}
          value={gender || ""}
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
        <div className="inputDiv">
          <label htmlFor="email">Электронная почта*</label>
          <Input
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Введите действительный адрес электронной почты",
              },
            })}
            className="inputStyles"
            style={errors.email ? InputErrorStyle : undefined}
            defaultValue={user.email}
            id="email"
            placeholder="Эмайл"
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="phone"> Номер телефона</label>
          <Input
            {...register("phone", {
              pattern: {
                value:
                  /^\+?[0-9]{1,3}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}$/,
                message: "Введите действительный адрес электронной почты",
              },
            })}
            className="inputStyles"
            defaultValue={user.phone}
            placeholder="+998"
            style={errors.email ? InputErrorStyle : undefined}
            id="phone"
          />
        </div>
      </div>
      <div className="pt-6 flex justify-between items-center">
        <SignOut />
        <Button
          variant="purple"
          className="text-lg rounded-xl h-12"
          type="submit"
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};

export default MyDataForm;
