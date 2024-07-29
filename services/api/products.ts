/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";

class ProductsService {
  async getAll() {
    const res = await makeRequest.get(ApiConstants.products);
    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(res.data.documents);

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
    const transformedData: IProduct = FirestoreTransformer.transformDocument(
      res.data
    );

    return transformedData;
  }

  async getByTitle(text: string) {
    const products: IProduct[] = await this.getAll();

    const res = products.filter((prod) =>
      prod.title.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    );

    return res;
  }

  async getBySubcategoryid(id: string) {
    let res = await makeRequest.post(`${ApiConstants.baseUrl}:runQuery`, {
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
    });

    const transformedData: IProduct[] =
      FirestoreTransformer.transformFirebaseData(
        res.data.map((doc: any) => doc.document)
      );

    return transformedData;
  }
}
export default new ProductsService();
