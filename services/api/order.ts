/* eslint-disable import/no-anonymous-default-export */
import { IOrder } from "@/interfaces/order";
import { FirestoreTransformer } from "@/utils/transformData";
import makeRequest from "../makeRequest";
import { ApiConstants } from "./apiConstants";

class OrderService {
  async postOrder(order: IOrder) {
    const firestoreFormat = FirestoreTransformer.toFirestoreFormat(order);
    const res = await makeRequest.post(ApiConstants.orders, {
      fields: firestoreFormat,
    });

    return res;
  }
}

export default new OrderService();
