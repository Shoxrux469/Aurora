import EmptyCard from "@/components/empty-card/EmptyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OrdersEmptryPageTabsData } from "@/constants";

const Orders = () => {
  return (
    <Tabs defaultValue="active" className="bg-white px-4 py-3 rounded-xl">
      <h1 className="text-3xl mb-4">Ваши Заказы</h1>
      <TabsList className="flex items-center gap-1 justify-center w-fit">
        {OrdersEmptryPageTabsData.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.value === "active"
              ? "Активные"
              : tab.value === "archive"
              ? "Архив"
              : "Неоплаченные"}
          </TabsTrigger>
        ))}
      </TabsList>
      {OrdersEmptryPageTabsData.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          <EmptyCard title={tab.title} description={tab.description} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Orders;
