import React from "react";
import MyDataForm from "../my-data-form/MyDataForm";
import { getCurrentUser } from "@/lib/auth";
import EmptyCard from "../empty-card/EmptyCard";

const Profile = async () => {
  const user = await getCurrentUser();
  return (
    <div className="bg-white px-7 pt-5 pb-8 rounded-xl">
      <h1 className="text-3xl pb-10">Профиль</h1>
      <MyDataForm user={user} />
    </div>
  );
};

export default Profile;
