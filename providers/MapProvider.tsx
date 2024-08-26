"use client";

import { ICoordinates, MapContextType } from "@/interfaces";
import { useJsApiLoader } from "@react-google-maps/api";
import { createContext, ReactNode, useContext, useState } from "react";
import { getAddressFromCoordinates } from "@/utils/geocode";

const MapContext = createContext<MapContextType | null>(null);

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
  });

  const [location, setLocation] = useState<ICoordinates | null>(null);
  const [address, setAddress] = useState<string | null>(null);

  // Обновление координат и адреса
  const updateLocationAndAddress = async (location: {
    lat: number;
    lng: number;
  }) => {
    setLocation(location);
    try {
      const fetchedAddress = await getAddressFromCoordinates(
        location.lat,
        location.lng
      );
      setAddress(fetchedAddress);
    } catch (error) {
      console.error("Failed to fetch address:", error);
      setAddress(null);
    }
  };

  const value = {
    location,
    address,
    setLocation,
    setAddress,
    updateLocationAndAddress,
  };

  if (loadError) return <p>Encountered error while loading Google Maps</p>;
  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}
