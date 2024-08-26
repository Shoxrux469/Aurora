import { FirestoreFields } from "@/utils/transformData";

export type idType = string;

export interface IImage {
  id: idType;
  filename: string;
  created_at: string;
  path: string;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface MapContextType {
  location: { lat: number; lng: number } | null;
  address: string | null;
  setAddress: (address: string) => void;
  setLocation: (location: { lat: number; lng: number }) => void;
  updateLocationAndAddress: (location: {
    lat: number;
    lng: number;
  }) => Promise<void>;
}
