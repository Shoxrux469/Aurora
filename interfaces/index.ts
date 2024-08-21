import { FirestoreFields } from "@/utils/transformData";

export type idType = string;

export interface IImage {
  id: idType;
  filename: string;
  created_at: string;
  path: string;
}

export interface ICoordinates {
  lat: number
  lng: number
}