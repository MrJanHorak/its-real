import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import { render } from "react-dom/client";
import MapGL,  {useControl, Marker, MarkerProps, ControlPosition} from "react-map-gl";
import MapboxGeocoder, {GeocoderOptions} from '@mapbox/mapbox-gl-geocoder';

// import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Landing = () => {
  const [marker, setMarker] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const geocoder = useControl<MapboxGeocoder>(
    () => {
      const ctrl = new MapboxGeocoder({
        marker: false,
        accessToken: MAPBOX_TOKEN
      });

      ctrl.on('loading', onLoading);
      ctrl.on('results', onResults);
      ctrl.on('result', evt => {
        onResult(evt);
     

        const {result} = evt;
        const location =
          result &&
          (result.center || (result.geometry?.type === 'Point' && result.geometry.coordinates));
        if (location && marker) {
          setMarker(<Marker {...marker} longitude={location[0]} latitude={location[1]} />);
        } else {
          setMarker(null);
        }
      });
      ctrl.on('error', onError);
      return ctrl;
    },
    {
      position: position
    }
  );



  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  // const handleGeocoderViewportChange = useCallback(
  //   (newViewport) => {
  //     const geocoderDefaultOverrides = { transitionDuration: 1000 };

  //     return handleViewportChange({
  //       ...newViewport,
  //       ...geocoderDefaultOverrides
  //     });
  //   },
  //   [handleViewportChange]
  // );

  return (
    <div style={{ height: "100vh" }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        
      >
        
        {geocoder}
        
      </MapGL>

    </div>
  );
};

export default Landing
