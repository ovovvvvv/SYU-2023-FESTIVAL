import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface GooglemapProps {
  lat: number;
  lng: number;
  minzoom: number;
  maxzoom: number;
}

const containerStyle = {
  width: '300px',
  height: '150Px',
};

function GoogleMapApi({ lat, lng, minzoom, maxzoom }: GooglemapProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const [, setMap] = React.useState(null);
  const center = {
    lat: lat,
    lng: lng,
  };

  const options = {
    minZoom: minzoom,
    maxZoom: maxzoom,
  };

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <div className="flex justify-center items-center p-2">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={options}
        >
          <Marker position={center}></Marker>
        </GoogleMap>
      ) : (
        <div>로딩중 . . .</div>
      )}
    </div>
  );
}
export default React.memo(GoogleMapApi);
