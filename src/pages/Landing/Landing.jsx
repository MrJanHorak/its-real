import React from "react";

import "../../styles/Landing.css";

//components
import Map from "../../components/Map/Map";
import Nav from "../../components/Nav/Nav";
import PictureElement from "../../components/PictureElement/PictureElement";

const Landing = () => {
  return (
    <div className="landing-main-view">
      <Nav/>
      <div className="map-component">
        <Map />
      </div>
        <PictureElement/>
    </div>
  );
};
export default Landing;
