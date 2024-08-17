import React from "react";
import ProfileForm from "../profile-form/ProfileForm";
import { getCurrentUser } from "@/lib/auth";

const Profile = async () => {
  const user = await getCurrentUser();
  return (
    <div className="bg-white px-7 pt-5 pb-8 rounded-xl">
      <h1 className="text-3xl pb-10">Профиль</h1>
      <ProfileForm user={user} />
    </div>
  );
};

export default Profile;
