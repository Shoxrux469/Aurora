import { FirestoreFields } from "@/utils/transformData";

export type idType = number | string

export interface IImage {
  id: idType;
  filename: string;
  created_at: string;
  path: string;
}

export interface IResponse {
  documents: {
    fields: FirestoreFields;
    createTime: string;
    updateTime: string
  }[]
}