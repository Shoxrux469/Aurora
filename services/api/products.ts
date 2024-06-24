/* eslint-disable import/no-anonymous-default-export */
import { FirestoreTransformer } from "@/utils/transformData";
import makeRequest from "../makeRequest";
import { IResponse } from "@/interfaces";
import { IProduct } from "@/interfaces/product";
import { ApiConstants } from "./apiConstants";

class ProductsService {
  async getAll() {
    const response = await makeRequest.get<IResponse>(ApiConstants.products)

    let transformedData = FirestoreTransformer.transformFirebaseData(response.data.documents)

    return transformedData
  }
}

export default new ProductsService()