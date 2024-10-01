/* eslint-disable import/no-anonymous-default-export */
import { IOrder } from "@/interfaces/order";
import { FirestoreTransformer } from "@/utils/transformData";
import makeRequest from "../makeRequest";
import { ApiConstants } from "./apiConstants";

class OrderService {
  async getByUserid(id: string): Promise<IOrder[] | undefined> {
    const res = await makeRequest.post(`${ApiConstants.baseUrl}:runQuery`, {
      structuredQuery: {
        from: [{ collectionId: "orders" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "user.id" },
            op: "EQUAL",
            value: { stringValue: id },
          },
        },
      },
    });
    if (res.data[0].document) {
      const transformedData: IOrder[] =
        FirestoreTransformer.transformFirebaseData(
          res.data.map((doc: any) => doc.document)
        );

      console.log(transformedData);

      return transformedData;
    }
  }

  async postOrder(order: IOrder) {
    const firestoreFormat = FirestoreTransformer.toFirestoreFormat(order);
    const res = await makeRequest.post(ApiConstants.orders, {
      fields: firestoreFormat,
    });

    return res;
  }
}

export default new OrderService();
