/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { ICategory } from "@/interfaces/category";
import { AxiosProgressEvent } from "axios";
import { handleProgress } from "@/utils/processHandler";

class CategoriesService {
  async getAll(onProgress: (progress: number) => void): Promise<ICategory[]> {
    const res = await makeRequest.get(ApiConstants.categories, {
      onDownloadProgress: (event: AxiosProgressEvent) =>
        handleProgress(event, onProgress),
    });

    return FirestoreTransformer.transformFirebaseData(res.data.documents);
  }

  async postCategory(data: ICategory, onProgress: (progress: number) => void) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.categories, {
      fields: firestoreData,
      onUploadProgress: (event: AxiosProgressEvent) =>
        handleProgress(event, onProgress),
    });

    return res;
  }
}

export default new CategoriesService();
