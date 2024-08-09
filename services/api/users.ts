/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IUser } from "@/interfaces/user";

class UsersService {
  async getByEmail(email: string): Promise<IUser> {
    const res = await makeRequest.post(`${ApiConstants.baseUrl}:runQuery`, {
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

    console.log(res.data);
    // console.log(res.data[0].document.fields);

    const transformedData: IUser[] = FirestoreTransformer.transformFirebaseData(
      res.data.map((doc: any) => doc.document)
    );

    console.log(transformedData[0]);

    return transformedData[0];
  }

  async postUser(user: IUser) {
    const allData = {
      ...user,
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
