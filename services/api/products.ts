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

  async GetById(id: string) {
    const res = await makeRequest.get(`${ApiConstants.products}/${id}`);
    const transformedData: IProduct = FirestoreTransformer.transformDocument(
      res.data
    );

    return transformedData;
  }

  async GetByTitle(text: string) {
    const res = await makeRequest.get(
      `${ApiConstants.products}/?title<=${text}`
    );
    
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    return transformedData;
  }

  async GetProdsBySubcategoryId(id: string) {
    const res = await makeRequest.get(
      // `${ApiConstants.products}?where=category.id=='${id}'`
      ApiConstants.products
    );
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    const filteredProds = transformedData.filter(
      (prod) => prod.category.id === id
    );

    console.log(transformedData);

    return filteredProds;
  }
}
export default new ProductsService();
