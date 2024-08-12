/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IUser } from "@/interfaces/user";
import bcrypt from "bcryptjs";

class UsersService {
  async getByEmail(email: string): Promise<IUser | null> {
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

    console.log(res.data[0].document);

    if (res.data[0].document) {
      const transformedData: IUser[] =
        FirestoreTransformer.transformFirebaseData(
          res.data.map((doc: any) => doc.document)
        );

      console.log(transformedData);

      return transformedData[0];
    } else {
      return null;
    }
  }

  async postUser(user: IUser) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const firestoreData = FirestoreTransformer.toFirestoreFormat({
      ...user,
      password: hashedPassword,
    });

    console.log(firestoreData);

    const res = await makeRequest.post(ApiConstants.users, {
      fields: firestoreData,
    });

    console.log(res);

    return res;
  }
}

export default new UsersService();
