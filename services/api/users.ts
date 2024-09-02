/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";
import { User } from "next-auth";

class UsersService {
  async getByEmail(email: string) {
    let res = await makeRequest.post(`${ApiConstants.baseUrl}:runQuery`, {
      structuredQuery: {
        from: [{ collectionId: "products" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "email" },
            op: "EQUAL",
            value: { stringValue: email },
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
  async postUser(data: User) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat(data);
    const res = await makeRequest.post(ApiConstants.users, {
      id: data.id,
      name: data.name,
      email: data.email,
    });

    return res;
  }
}

export default new UsersService();
