import React from "react";
import Down from "../../Images/downarrow.png";
import "./circlebutton-component.css";

export default function CircleButton() {
  return (
    <div className="circulo">
      <img id="downarrow" src={Down} alt="" />
    </div>
  );
}
