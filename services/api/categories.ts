/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IResponse } from "@/interfaces";
import { ICategory } from "@/interfaces/category";

class CategoriesService {
  async getAll() {
    const res = await makeRequest.get<IResponse>(ApiConstants.categories);
    const transformedData = FirestoreTransformer.transformFirebaseData(
      res.data.documents
    );

    return transformedData;
  }
  async postCategory(data: ICategory) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.categories, {
      fields: firestoreData,
    });

    return res;
  }
}

export default new CategoriesService();
