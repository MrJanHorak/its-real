import { Box } from '@mui/material'

import "mapbox-gl/dist/mapbox-gl.css";
// import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import ReactMapGL, { GeolocateControl, Marker } from "react-map-gl";

import React,  {  useRef, useState, useCallback } from "react";
import Geocoder from "react-map-gl-geocoder";

// import styles from "./LocationSearch.module.css";

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;



const Landing = (props) => {

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );


  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <Box 
    sx={{
      height:400,
      position:'relative'
    }}
    >
      <ReactMapGL
      mapboxAccessToekn={MAPBOX_TOKEN}
      initialViewState={viewport}
      onViewportChange={handleViewportChange}
      mapStyle="mapbox://styles/janhorak/cl46d05kd004j14qt7avuchry"
      >
        <Marker 
        latitude={viewport.latitude}
        longitude={viewport.longitudeng}
        draggable
        onDragEnd={(e)=> setViewport({ longitude: e.lngLat.lng, latitude: e.lngLat.lat})}
        />
      </ReactMapGL>

    </Box>
  );
};

export default Landing;
