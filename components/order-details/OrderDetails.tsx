import { IOrder } from "@/interfaces/order";
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "../ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { getTranslations } from "next-intl/server";
import OrderDetailsItems from "../order-details-items/OrderDetailsItems";

export const OrderDetails = async ({ order }: { order: IOrder }) => {
  const t = await getTranslations("User-info.orders.order_details");

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4">
        {t("order_identifier", { id: order.id })}
      </h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <span className="font-medium">{t("status.label")}</span>
            </TableCell>
            <TableCell
              className={`${
                order.status === 0 ? "text-blue-600" : "text-gray-600"
              }`}
            >
              {order.status === 0
                ? t("status.in_progress")
                : order.status === 1
                ? t("status.delivered")
                : t("status.canceled")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-medium">{t("delivery_date.label")}</span>
            </TableCell>
            <TableCell>{order.createTime}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-medium">{t("delivery_address.label")}</span>
            </TableCell>
            <TableCell>{order.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-medium">{t("order_date.label")}</span>
            </TableCell>
            <TableCell>{order.createTime}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <span className="font-medium">{t("order_total.label")}</span>
            </TableCell>
            <TableCell>{order.totalPrice}$</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Accordion type="single" collapsible className="mt-4">
        <AccordionItem value="items">
          <AccordionTrigger className="text-xl hover:underline-offset-0">
            {order.items.length} {t("product_count")}
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            {order.items?.map((item, idx) => (
              <OrderDetailsItems key={idx} item={item} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
