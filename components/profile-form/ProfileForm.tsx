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
import { toast } from "../ui/use-toast";
import { useTranslations } from "next-intl";

const ProfileForm = ({ user, locale }: { user: IUser; locale: string }) => {
  const t = useTranslations("User-info.profile.profile-form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserPatchForm>();
  const [gender, setGender] = useState<UserGender>(user.gender || "");

  const onSubmit = async (data: IUserPatchForm) => {
    const isUser = await UsersService.getByEmail(user.email);

    const res: IUserPatchForm = {
      ...data,
      gender,
      id: isUser!.id,
      password: isUser!.password,
    };

    if (data.email !== user.email) {
      const userExist = await UsersService.getByEmail(data.email);

      if (!userExist) {
        await UsersService.patchUser(res);
      } else {
        toast({
          title: t("user-exists-error"),
          description: t("user-exists-error"),
          variant: "destructive",
        });
        return;
      }
    }

    await UsersService.patchUser(res);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-4 sm:p-6 md:p-0"
    >
      <div className="flex items-center gap-10">
        <div className="inputDiv">
          <label htmlFor="surname">{t("surname")}</label>
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
          <label htmlFor="name">{t("name")}</label>
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
          <label htmlFor="middlename">{t("middlename")}</label>
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
          <label htmlFor="birthdate">{t("birthdate")}</label>
          <Input
            className="inputStyles"
            {...register("birthdate", {
              required: false,
              minLength: 3,
              maxLength: 15,
            })}
            placeholder="дд/мм/гггг"
            defaultValue={user?.birthdate}
            id={"birthdate"}
          />
        </div>
        <Tabs
          className="inputDiv"
          onValueChange={(value) => setGender(value as "Мужской" | "Женский")}
          value={gender || ""}
        >
          <div>{t("gender")}</div>
          <TabsList className="w-fit text-xl h-12">
            <TabsTrigger className="h-11 text-lg" value="Женский">
              {t("female")}
            </TabsTrigger>
            <TabsTrigger className="h-11 text-lg" value="Мужской">
              {t("male")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex items-center gap-10 w-11/12">
        <div className="inputDiv">
          <label htmlFor="email">{t("email")}</label>
          <Input
            {...register("email", {
              required: t("email-required"),
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: t("email-invalid"),
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
          <label htmlFor="phone">{t("phone")}</label>
          <Input
            {...register("phone", {
              pattern: {
                value:
                  /^\+?[0-9]{1,3}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}[-.\s]?[0-9]{2,4}$/,
                message: t("phone-invalid"),
              },
            })}
            className="inputStyles"
            type="tel"
            defaultValue={user.phone}
            placeholder="+998"
            style={errors.phone ? InputErrorStyle : undefined}
            id="phone"
          />
        </div>
      </div>
      <div className="pt-6 flex justify-between items-center">
        <SignOut locale={locale} />
        <Button
          variant="purple"
          className="text-lg rounded-xl h-12"
          type="submit"
        >
          {t("save")}
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;
