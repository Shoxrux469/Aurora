/* eslint-disable import/no-anonymous-default-export */
import makeRequest from "../makeRequest";
import { FirestoreTransformer } from "@/utils/transformData";
import { ApiConstants } from "./apiConstants";
import { IUser, IUserPatchForm } from "@/interfaces/user";
import bcrypt from "bcryptjs";
import { toast } from "@/components/ui/use-toast";

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
    if (res.data[0].document) {
      const transformedData: IUser[] =
        FirestoreTransformer.transformFirebaseData(
          res.data.map((doc: any) => doc.document)
        );

      console.log(transformedData);

      return transformedData[0];
    } else {
      toast({
        title: "Аккаунт не найден!",
        description:
          "Пользователь с таким эмайлом не существует, пожалуйста зарегистрируйтесь и повторите снова!",
        variant: "destructive",
      });
      return null;
    }
  }

  async postUser(user: IUser) {
    console.log(user);
    const hashedPassword = await bcrypt.hash(user?.password, 10);
    const thirdPartyProvder = 0;

    const firestoreData = FirestoreTransformer.toFirestoreFormat({
      ...user,
      password: hashedPassword || thirdPartyProvder,
    });

    console.log(firestoreData);

    const res = await makeRequest.post(ApiConstants.users, {
      fields: firestoreData,
    });

    console.log(res);

    return res;
  }
  async patchUser(user: IUserPatchForm) {
    try {
      const userId = user.id;
      if (!userId) {
        throw new Error("User ID is required to update user data.");
      }

      const { id, ...userWithoutId } = user;

      const firestoreData =
        FirestoreTransformer.toFirestoreFormat(userWithoutId);

      const res = await makeRequest.patch(`${ApiConstants.users}/${userId}`, {
        fields: firestoreData,
      });

      console.log(res);

      return res;
    } catch (error) {
      toast({
        title: "Ошибка обновления!",
        description: "Произошла ошибка при обновлении данных!",
        variant: "destructive",
      });
      throw error;
    }
  }
}

export default new UsersService();
