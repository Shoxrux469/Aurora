import Profile from "@/components/profile/page";
import Orders from "@/components/orders/Orders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Box, UserCog } from "lucide-react";
import { getCurrentUser } from "@/lib/auth";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

interface UserInfoProps {
  params: { slug: string; locale: string };
}
const UserInfo: React.FC<UserInfoProps> = async ({ params }) => {
  const user = await getCurrentUser();

  const t = await getTranslations("User-info");

  const TABS = [
    {
      value: "orders",
      label: t("orders.title"),
      component: <Orders />,
      icon: <Box size={24} />,
    },
    {
      value: "profile",
      label: t("profile.title"),
      component: <Profile locale={params.locale} />,
      icon: <UserCog size={24} />,
    },
  ];

  const defaultTab = TABS.some((tab) => tab.value === params.slug)
    ? params.slug
    : TABS[0].value;

  return (
    user && (
      <section>
        <Tabs
          defaultValue={defaultTab}
          className="container pt-6 pb-32 bg-muted px-8 grid grid-cols-1 lg:grid-cols-4 gap-4 relative"
        >
          <div className="col-span-1 px-2 py-2 rounded-xl bg-white">
            <TabsList className="h-fit px-3 flex flex-col py-2 space-y-2">
              {TABS.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full"
                >
                  <Link
                    href={tab.value}
                    className="flex gap-1 text-lg items-center"
                  >
                    {tab.icon}
                    <p>{tab.label}</p>
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div className="col-span-3">
            {TABS.map((tab) => (
              <TabsContent className="mt-0" key={tab.value} value={tab.value}>
                {tab.component}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </section>
    )
  );
};

export default UserInfo;
