import React from "react";
import { ComparisonSlider } from "react-comparison-slider";

//assests
import pic1 from "../../pictures/agassiz-glacier-1913-1.jpg";
import pic2 from "../../pictures/agassiz-glacier-2005-2.jpg";
import pic3 from "../../pictures/boulder-glacier-cave-1932-1.jpg";
import pic4 from "../../pictures/boulder-glacier-cave-1988-2.jpg";
import pic5 from "../../pictures/MarmoladaDolomitesItalianAlps-1880-1.jpg";
import pic6 from "../../pictures/MarmoladaDolomitesItalianAlps-2020-2.jpg";

const PictureElement = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <ComparisonSlider
        defaultValue={50}
        itemOne={
          <div className="bg-red-200">
            <img src={pic1} alt="pic1" />
          </div>
        }
        itemTwo={
          <div className="bg-blue-200">
            <img src={pic2} alt="pic2" />
          </div>
        }
        aspectRatio={4/3}
        // orientation="vertical"
      />
      <br />
      <br />
      <br />
      <br />
      <ComparisonSlider
        defaultValue={50}
        itemOne={
          <div className="bg-red-200">
            <img src={pic3} alt="pic1" />
          </div>
        }
        itemTwo={
          <div className="bg-blue-200">
            <img src={pic4} alt="pic2" />
          </div>
        }
        aspectRatio={4/3}
        // orientation="vertical"
      />
      <br />
      <br />
      <br />
      <br />
      <ComparisonSlider
        defaultValue={50}
        itemOne={
          <div className="bg-red-200">
            <img src={pic5} alt="pic5" />
          </div>
        }
        itemTwo={
          <div className="bg-blue-200">
            <img src={pic6} alt="pic6" />
          </div>
        }
        aspectRatio={4/3}
        // orientation="vertical"
      />
      <br />
      <br />
      <br />
      <br />
      <div>
        <img src={pic1} alt="pic1" />
      </div>
      <br />
      <br />
      <br />
      <div>
        <img src={pic2} alt="pic2" />
      </div>
    </div>
  );
};

export default PictureElement;
