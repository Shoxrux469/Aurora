import EmptyCard from "@/components/empty-card/EmptyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getTranslations } from "next-intl/server";
import OrdersService from "../../services/api/order";
import { getCurrentUser } from "@/lib/auth";
import { IOrder } from "@/interfaces/order";
import { OrderDetails } from "../order-details/OrderDetails";

const Orders = async () => {
  const t = await getTranslations("User-info.orders");
  const user = await getCurrentUser();

  const userOrders = await OrdersService.getByUserid(user.id);

  if (userOrders) console.log(userOrders);

  const OrdersEmptryPageTabsData = [
    {
      value: "active",
      title: t("active.no_orders"),
      description: t("active.no_orders_text"),
    },
    {
      value: "archive",
      title: t("archive.no_orders"),
      description: t("archive.no_orders_text"),
    },
    {
      value: "unpaid",
      title: t("unpaid.no_orders"),
      description: t("unpaid.no_orders_text"),
    },
  ];

  return (
    <Tabs defaultValue="active" className="bg-white px-4 py-3 rounded-xl">
      <h1 className="text-3xl mb-4">{t("your_orders")}</h1>
      <TabsList className="flex items-center gap-1 justify-center w-fit">
        {OrdersEmptryPageTabsData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.value === "active"
              ? t("active.title")
              : tab.value === "archive"
              ? t("archive.title")
              : t("unpaid.title")}
          </TabsTrigger>
        ))}
      </TabsList>
      {OrdersEmptryPageTabsData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.value === "archive" && userOrders && userOrders.length > 0 ? (
            <div>
              {userOrders.map((order) => (
                <OrderDetails key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <EmptyCard title={tab.title} description={tab.description} />
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Orders;
