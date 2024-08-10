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

    const transformedData: IUser[] = FirestoreTransformer.transformFirebaseData(
      res.data.map((doc: any) => doc.document)
    );

    console.log(transformedData);

    return transformedData[0];
  }

  async postUser({ id, name, password, email }: IUser) {
    const firestoreData = FirestoreTransformer.toFirestoreFormat({
      id,
      name,
      email,
      password,
    });

    console.log(firestoreData);

    const res = await makeRequest.post(ApiConstants.users, {
      fields: firestoreData,
    });
 
    console.log("RESULT" + res);

    return res;
  }
}

export default new UsersService();
