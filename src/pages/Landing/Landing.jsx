import React from "react";

import "../../styles/Landing.css";

//components
import Map from "../../components/Map/Map";
import Nav from "../../components/Nav/Nav";

const Landing = () => {
  return (
    <div className="landing-main-view">
      <Nav/>
      <div className="map-component">
        <Map />
      </div>
    </div>
  );
};
export default Landing;
