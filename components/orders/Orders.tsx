import EmptyCard from "@/components/empty-card/EmptyCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Orders = () => {
  return (
    <Tabs defaultValue="active" className="bg-white px-4 py-3 rounded-xl">
      <h1 className="text-3xl mb-4">Ваши Заказы</h1>
      <TabsList className="flex items-center justify-center w-fit">
        <TabsTrigger value="active">Активные</TabsTrigger>
        <TabsTrigger value="archive">Архив</TabsTrigger>
        <TabsTrigger value="unpaid">Неоплаченные</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <EmptyCard
          title="Нет текущих заказов"
          description="Вы еще не сделали ни одного заказа. Ваши активные заказы появятся здесь."
        />
      </TabsContent>
      <TabsContent value="archive">
        <EmptyCard
          title="История заказов"
          description="История ваших прошлых заказов пуста. Здесь будут отображаться все завершенные заказы."
        />
      </TabsContent>
      <TabsContent value="unpaid">
        <EmptyCard
          title="Нет неоплаченных заказов"
          description="У вас нет неоплаченных заказов. Ваша задолженность по неоплаченным заказам будет отображаться здесь."
        />
      </TabsContent>
    </Tabs>
  );
};

export default Orders;
