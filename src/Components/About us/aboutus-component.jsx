import React from "react";
import Doctor from "../../Images/Doctor.png";
import { Text } from "../../contexts/language-context/language-context";
import "./aboutus-component.css";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="img-div">
        <img src={Doctor} alt="doctor-about-us-img" />
      </div>
      <div className="aboutpara-div">
        <h1>
          <Text textId="page2AboutTitle" />
        </h1>
        <p>
          <Text textId="page2AboutText1" />
        </p>
        <p>
          <Text textId="page2AboutText2" />
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
