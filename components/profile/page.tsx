"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { InputErrorStyle } from "@/constants";

type IProfileInputs = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const Profile = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IProfileInputs>();

  const onSubmit: SubmitHandler<IProfileInputs> = () => {};

  return (
    <div className="bg-white px-4 py-3 rounded-xl">
      <h1 className="text-3xl">Профиль</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Имя*</label>
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
      </form>
    </div>
  );
};

export default Profile;
