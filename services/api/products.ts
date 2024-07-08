/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";

import { v4 as uuid } from 'uuid';

class ProductsService {
  async getAll() {
    const res = await makeRequest.get(ApiConstants.products)
    const transformedData = FirestoreTransformer.transformFirebaseData(res.data.documents)

    return transformedData;
  }

  async postProduct(data: IProduct) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data)
    const res = await makeRequest.post(ApiConstants.products, { fields: firestoreData })

    return res
  }
}
export default new ProductsService();