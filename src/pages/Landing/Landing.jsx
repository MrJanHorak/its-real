import React, { useRef, useState, useEffect } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";
import "../../styles/Landing.css";

//components

import InputField from '../../components/GeoSearch/inputField.js'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Landing = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/janhorak/cl46d05kd004j14qt7avuchry",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  const handleSearchResult = (results) => {
    console.log("from input", results)
    setLng(results[0])
    setLat(results[1])
    map.current.flyTo ({
      center: results,
      zoom: 12,
      essential: true
    });
    
  }
// useEffect(() => {},[lng,lat])

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <InputField handleSearchResult={handleSearchResult}/>
    </div>
  );
};
export default Landing;
