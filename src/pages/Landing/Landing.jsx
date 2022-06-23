import React from "react";

import "../../styles/Landing.css";

//components
import Map from "../../components/Map/Map";

const Landing = () => {
  return (
    <div>
      <div className="map-component">
        <Map />
      </div>
    </div>
  );
};
export default Landing;
