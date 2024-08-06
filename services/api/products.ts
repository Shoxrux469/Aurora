/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";
import { AxiosProgressEvent } from "axios";
import { handleProgress } from "@/utils/processHandler";

class ProductsService {
  async getAll(onProgress: (progress: number) => void) {
    const res = await makeRequest.get(ApiConstants.products, {
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        handleProgress(progressEvent, onProgress);
      },
    });

    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    return transformedData;
  }

  async postProduct(data: IProduct, onProgress: (progress: number) => void) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.products, {
      fields: firestoreData,
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        handleProgress(progressEvent, onProgress);
      },
    });

    return res;
  }

  async getById(id: string, onProgress: (progress: number) => void) {
    const res = await makeRequest.get(`${ApiConstants.products}/${id}`, {
      onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
        handleProgress(progressEvent, onProgress);
      },
    });
    const transformedData: IProduct = FirestoreTransformer.transformDocument(
      res.data
    );

    return transformedData;
  }

  async getByTitle(text: string, onProgress: (progress: number) => void) {
    const products: IProduct[] = await this.getAll(onProgress);

    const res = products.filter((prod) =>
      prod.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

    return res;
  }

  async getBySubcategoryid(id: string, onProgress: (progress: number) => void) {
    let res = await makeRequest.post(
      `${ApiConstants.baseUrl}:runQuery`,
      {
        structuredQuery: {
          from: [{ collectionId: "products" }],
          where: {
            fieldFilter: {
              field: { fieldPath: "category.id" },
              op: "EQUAL",
              value: { stringValue: id },
            },
          },
        },
      },
      {
        onDownloadProgress: (progressEvent: AxiosProgressEvent) =>
          handleProgress(progressEvent, onProgress),
      }
    );

    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(
        res.data.map((doc: any) => doc.document)
      );

    return transformedData;
  }
}

export default new ProductsService();
