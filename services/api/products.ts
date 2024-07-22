/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";

class ProductsService {
  async getAll() {
    const res = await makeRequest.get(ApiConstants.products);
    const transformedData = FirestoreTransformer.transformFirebaseData(
      res.data.documents
    );

    return transformedData;
  }

  async postProduct(data: IProduct) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.products, {
      fields: firestoreData,
    });

    return res;
  }

  async getById(id: string) {
    const res = await makeRequest.get(`${ApiConstants.products}/${id}`);
    const transformedData: IProduct = FirestoreTransformer.transformDocument(res.data);

    return transformedData;
  }

  async getByTitle(text: string) {
    const res = await makeRequest.get(
      `${ApiConstants.products}/?title<=${text}`
    );

    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    return transformedData;
  }

  async getByCategoryId(categoryId: string) {
    let res = await makeRequest.post(
      `${ApiConstants.baseUrl}:runQuery`,
      {
        'structuredQuery': {
          'from': [{ 'collectionId': "products" }],
          'where': {
            'fieldFilter': {
              'field': { 'fieldPath': "category.id" },
              'op': "EQUAL",
              'value': { 'stringValue': categoryId },
            },
          },
        },
      }
    );

    const transformedData: IProduct[] = FirestoreTransformer.transformFirebaseData(
      res.data.map((doc: any) => doc.document)
    );

    return transformedData;
  }
}
export default new ProductsService();
