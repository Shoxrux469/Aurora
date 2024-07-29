/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IProduct } from "@/interfaces/product";
import { User } from "next-auth";
import { IUser } from "@/interfaces/user";

class UsersService {
  async getByEmail(email: string) {
    let res = await makeRequest.post(`${ApiConstants.baseUrl}:runQuery`, {
      structuredQuery: {
        from: [{ collectionId: "users" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "email" },
            op: "EQUAL",
            value: { stringValue: email },
          },
        },
      },
    });

    const transformedData: IUser[] = FirestoreTransformer.transformFirebaseData(
      res.data.map((doc: any) => doc.document)
    );

    return transformedData;
  }
  async postUser(data: User) {
    const allData = {
      ...data,
      orders: [],
    };

    const firestoreData = FirestoreTransformer.toFirestoreFormat(allData);
    const res = await makeRequest.post(ApiConstants.users, {
      fields: firestoreData,
    });

    return res;
  }
}

export default new UsersService();
