/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IUser } from "@/interfaces/user";
import { AxiosProgressEvent } from "axios";
import { handleProgress } from "@/utils/processHandler";

class UsersService {
  async getByEmail(
    email: string,
    onProgress: (progress: number) => void
  ): Promise<IUser[]> {
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
      onDownloadProgress: (event: AxiosProgressEvent) =>
        handleProgress(event, onProgress),
    });

    const transformedData: IUser[] = FirestoreTransformer.transformFirebaseData(
      res.data.map((doc: any) => doc.document)
    );

    return transformedData;
  }

  async postUser(data: IUser, onProgress: (progress: number) => void) {
    const allData = {
      ...data,
      orders: [],
    };

    const firestoreData = FirestoreTransformer.toFirestoreFormat(allData);
    const res = await makeRequest.post(ApiConstants.users, {
      fields: firestoreData,
      onUploadProgress: (event: AxiosProgressEvent) =>
        handleProgress(event, onProgress),
    });

    return res;
  }
}

export default new UsersService();
