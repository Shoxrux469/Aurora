"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import { useMapContext } from "@/providers/MapProvider";

const containerStyle = {
  width: "100%",
  height: "440px",
  borderRadius: "10px",
};

const defaultCenter = {
  lat: 39.65397801341055,
  lng: 66.9231104850769,
};

const Map: React.FC = () => {
  const { location, setLocation } = useMapContext();
  const markerRef = useRef<google.maps.Marker | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    mapRef.current = mapInstance;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const getCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lng: longitude };
          if (mapRef.current) {
            mapRef.current.setCenter(location);
          }
          setLocation(location);
        },
        (error) => {
          console.error("Error getting current location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [setLocation]);

  const handleMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setLocation({ lat, lng });

        if (markerRef.current) {
          markerRef.current.setPosition({ lat, lng });
        }
      }
    },
    [setLocation]
  );

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || defaultCenter}
        zoom={16}
        options={{ disableDefaultUI: true }}
        onClick={handleMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {location && <Marker position={location} />}
      </GoogleMap>

      <div className="mt-4 flex justify-center w-fit absolute right-8 top-16 ">
        <Button
          onClick={getCurrentLocation}
          className="p-0 w-12 h-12 rounded-full"
        >
          <Navigation size={32} />
        </Button>
      </div>
    </>
  );
};

export default Map;
