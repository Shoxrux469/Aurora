

export async function getAddressFromCoordinates(lat: number, lng: number): Promise<string> {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status === 'OK' && data.results.length > 0) {
      return data.results[0].formatted_address;
    } else {
      throw new Error(`Geocoding API returned status: ${data.status}`);
    }
  } catch (error) {
    console.error('Error fetching address:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}