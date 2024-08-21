'use client';

import { ICoordinates } from '@/interfaces';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { createContext, ReactNode, useContext, useState } from 'react';

interface MapContextType {
  location: { lat: number; lng: number } | null;
  setLocation: (location: { lat: number; lng: number }) => void;
}

const MapContext = createContext<MapContextType | null>(null)
export const useMapContext = () => {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider")
  }
  return context
}

const libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  const [location, setLocation] = useState<ICoordinates | null>(null)
  const value = { location, setLocation };

  if (loadError) return <p>Encountered error while loading google maps</p>
  if (!scriptLoaded) return <p>Map Script is loading ...</p>

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}