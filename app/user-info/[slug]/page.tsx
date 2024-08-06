import Profile from "@/components/profile/page";
import Orders from "@/components/orders/Orders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Box, UserCog } from "lucide-react";

interface UserInfoProps {
  params: { slug: string };
}

const TABS = [
  {
    value: "orders",
    label: "Заказы",
    component: <Orders />,
    icon: <Box size={24} />,
  },
  {
    value: "profile",
    label: "Профиль",
    component: <Profile />,
    icon: <UserCog size={24} />,
  },
];
const UserInfo: React.FC<UserInfoProps> = ({ params }) => {
  // Set the default tab or fall back to the first one
  const defaultTab = TABS.some((tab) => tab.value === params.slug)
    ? params.slug
    : TABS[0].value;

  return (
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
                className="w-full gap-1 text-lg"
              >
                {tab.icon}
                <p>{tab.label}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="col-span-3">
          {TABS.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.component}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </section>
  );
};

export default UserInfo;
