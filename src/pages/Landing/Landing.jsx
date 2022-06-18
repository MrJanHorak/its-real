import React, { useRef, useState, useEffect } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import "mapbox-gl/dist/mapbox-gl.css";

import "../../styles/Landing.css";

//components

import InputField from '../../components/GeoSearch/inputField.js'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Landing = () => {

  const coordinates = document.getElementById('coordinates');

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

  const marker =new mapboxgl.Marker({draggable: true, color: "#FF0000"})

  const handleSearchResult = (results) => {
    console.log("from input", results)
    setLng(results[0])
    setLat(results[1])
   marker
   .setLngLat(results)
  .addTo(map.current);
    map.current.flyTo ({
      center: results,
      zoom: 12,
      essential: true
    });
    
  }

  const handleMarkerDragend = () => {
    console.log('in dragend')
    const lngLat = marker.getLngLat();
    console.log(marker)
    }

    marker.on('dragend', handleMarkerDragend);

  return (
    <div>
    <InputField  handleSearchResult={handleSearchResult}/>
      <div ref={mapContainer} className="map-container" >
    </div>
    </div>
  );
};
export default Landing;
