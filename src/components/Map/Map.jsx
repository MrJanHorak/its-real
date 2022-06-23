import React, { useRef, useState, useEffect } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";

// import "../../styles/Landing.css";

//components

import InputField from "../../components/GeoSearch/inputField.js";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const marker = new mapboxgl.Marker({ draggable: true, color: "#FF0000" });
  const popup = new mapboxgl.Popup()
  const nav = new mapboxgl.NavigationControl();
  const scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
    });
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/janhorak/cl46d05kd004j14qt7avuchry",
      center: [lng, lat],
      zoom: zoom,
    }).addControl(nav, 'bottom-left').addControl(scale);
  });
  
  // map.addControl(nav, 'top-left')


  const handleSearchResult = (results) => {
    console.log("from input", results);
    setLng(results[0]);
    setLat(results[1]);
    marker.setLngLat(results).addTo(map.current).setPopup(popup.setHTML(`<h1>Testing POPUP!</h1><br/><h3>${results}</h3>`))
    map.current.flyTo({
      center: results,
      zoom: 12,
      essential: true,
    });
  };

  const handleMarkerDragend = () => {
    const lngLat = marker.getLngLat()
    console.log('lngLat',lngLat)
    marker.setLngLat(lngLat).addTo(map.current).setPopup(popup.setHTML(`<h1>Updated POPUP!</h1><br/><h3>Updated: ${lngLat}</h3>`))
  };

  marker.on("dragend", handleMarkerDragend);

  return (
    <div>
      <InputField handleSearchResult={handleSearchResult} />
      <div ref={mapContainer} className="map-container"></div>
    </div>
  );
};
export default Map;
