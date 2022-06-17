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
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // const coordinatesGeocoder = function (query) {
  //   // Match anything which looks like
  //   // decimal degrees coordinate pair.
  //   const matches = query.match(
  //   /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
  //   );
  //   if (!matches) {
  //   return null;
  //   }
     
  //   function coordinateFeature(lng, lat) {
  //   return {
  //   center: [lng, lat],
  //   geometry: {
  //   type: 'Point',
  //   coordinates: [lng, lat]
  //   },
  //   place_name: 'Lat: ' + lat + ' Lng: ' + lng,
  //   place_type: ['coordinate'],
  //   properties: {},
  //   type: 'Feature'
  //   };
  //   }
     
  //   const coord1 = Number(matches[1]);
  //   const coord2 = Number(matches[2]);
  //   const geocodes = [];
     
  //   if (coord1 < -90 || coord1 > 90) {
  //   // must be lng, lat
  //   geocodes.push(coordinateFeature(coord1, coord2));
  //   }
     
  //   if (coord2 < -90 || coord2 > 90) {
  //   // must be lat, lng
  //   geocodes.push(coordinateFeature(coord2, coord1));
  //   }
     
  //   if (geocodes.length === 0) {
  //   // else could be either lng, lat or lat, lng
  //   geocodes.push(coordinateFeature(coord1, coord2));
  //   geocodes.push(coordinateFeature(coord2, coord1));
  //   }
     
  //   return geocodes;
  //   };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/janhorak/cl46d05kd004j14qt7avuchry",
      center: [lng, lat],
      zoom: zoom,
    });
    // map.addControl(
    //   new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   localGeocoder: coordinatesGeocoder,
    //   zoom: 4,
    //   placeholder: 'Try: -40, 170',
    //   mapboxgl: mapboxgl,
    //   reverseGeocode: true
    //   })
    // )
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
    <InputField  handleSearchResult={handleSearchResult}/>
      <div ref={mapContainer} className="map-container" >
    </div>
    </div>
  );
};
export default Landing;
