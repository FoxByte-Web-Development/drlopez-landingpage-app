import React from 'react'
import Elipse from "../../Images/Ellipse.png";
import Down from "../../Images/downarrow.png"
import "./circlebutton-component.css"
export default function CircleButton() {
  return (
    <div className="circulo">
          <img src={Elipse} alt="" />
          <img id="downarrow" src={Down} alt="" />
        </div>
  )
}
