/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IResponse } from "@/interfaces";
import { IProduct } from "@/interfaces/product";

class ProductsService {
  async getAll() {
    const res = await makeRequest.get<IResponse>(ApiConstants.products);
    const transformedData = FirestoreTransformer.transformFirebaseData(
      res.data.documents
    );

    return transformedData;
  }

  async postData(data: IProduct) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.products, firestoreData);

    return res;
  }

  async GetById(id: string) {
    const res = await makeRequest.get<IResponse>(
      // `${ApiConstants.products}/${id}.json`
      ApiConstants.products
    );
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    const foundProd = transformedData.find((prod) => prod.id === id);

    console.log(transformedData);

    return foundProd;
  }

  async GetByTitle(text: string) {
    const res = await makeRequest.get<IResponse>(ApiConstants.products);
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    const filteredProds = transformedData?.filter(
      (prods) => prods.title.toLowerCase() === text.toLowerCase()
    );

    return filteredProds;
  }

  async GetSubcategoryById(id: string) {
    const res = await makeRequest.get<IResponse>(ApiConstants.products);
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

    const filteredProds = transformedData?.filter(
      (prods) => prods.category.id === id
    );

    return filteredProds;
  }
}
export default new ProductsService();
