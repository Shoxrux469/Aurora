import React from "react";
import ProfileForm from "../profile-form/ProfileForm";
import { getCurrentUser } from "@/lib/auth";
import { getTranslations } from "next-intl/server";

const Profile = async ({ locale }: { locale: string }) => {
  const user = await getCurrentUser();
  const t = await getTranslations("User-info.profile");

  return (
    <div className="bg-white px-7 pt-5 pb-8 rounded-xl">
      <h1 className="text-3xl pb-10">{t("title")}</h1>
      <ProfileForm locale={locale} user={user} />
    </div>
  );
};

export default Profile;
