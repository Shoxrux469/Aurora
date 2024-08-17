'use client'

import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { Button } from '@/components/ui/button';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 39.65397801341055,
  lng: 66.9231104850769,
};

interface MapProps {
  onLocationSelect: (lat: number, lng: number) => void;
}

const Map: React.FC<MapProps> = ({ onLocationSelect }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      onLocationSelect(lat, lng);
      setSelectedLocation({ lat, lng });

      if (markerRef.current) {
        markerRef.current.setPosition({ lat, lng });
      } else if (map) {
        markerRef.current = new google.maps.Marker({
          position: { lat, lng },
          map,
        });
      }
    }
  }, [onLocationSelect, map]);

  const handleGetCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = { lat: latitude, lng: longitude };
          setSelectedLocation(location);
          map?.setCenter(location);
          onLocationSelect(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [map, onLocationSelect]);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={16}
        options={{ disableDefaultUI: true }}
        onClick={handleMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {selectedLocation && (
          <Marker position={selectedLocation} />
        )}
      </GoogleMap>

      <div className="mt-4 flex justify-center">
        <Button onClick={handleGetCurrentLocation}>
          Use Current Location
        </Button>
      </div>
    </div>
  )
};

export default Map;
