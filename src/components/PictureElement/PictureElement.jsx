import React from "react";
import { ComparisonSlider } from "react-comparison-slider";
import "../../styles/PictureElement.css";

//assests
import pic1 from "../../pictures/agassiz-glacier-1913-1.jpg";
import pic2 from "../../pictures/agassiz-glacier-2005-2.jpg";
import pic3 from "../../pictures/boulder-glacier-cave-1932-1.jpg";
import pic4 from "../../pictures/boulder-glacier-cave-1988-2.jpg";
import pic5 from "../../pictures/MarmoladaDolomitesItalianAlps-1880-1.jpg";
import pic6 from "../../pictures/MarmoladaDolomitesItalianAlps-2020-2.jpg";

const PictureElement = () => {
  return (
    <div className="comparison-view-container">
      <br />
      <div className="slider-box">
        <ComparisonSlider
          id="first"
          defaultValue={50}
          itemOne={
            <div className="before-pic">
              <img src={pic1} alt="pic1" />
            </div>
          }
          itemTwo={
            <div className="after-pic">
              <img src={pic2} alt="pic2" />
            </div>
          }
          aspectRatio={4 / 3}
        />
      </div>
      <div className="slider-box">
        <ComparisonSlider
          defaultValue={50}
          itemOne={
            <div className="before-pic">
              <img src={pic3} alt="pic1" />
            </div>
          }
          itemTwo={
            <div className="after-pic">
              <img src={pic4} alt="pic2" />
            </div>
          }
          aspectRatio={4 / 3}
        />
      </div>
      <div className="slider-box" id="three">
        <ComparisonSlider
          defaultValue={50}
          itemOne={
            <div className="before-pic">
              <img src={pic5} alt="pic5" />
            </div>
          }
          itemTwo={
            <div className="after-pic">
              <img src={pic6} alt="pic6" />
            </div>
          }
          aspectRatio={1 / 1}
        />
      </div>
    </div>
  );
};

export default PictureElement;
