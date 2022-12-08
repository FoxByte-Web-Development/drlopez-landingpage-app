import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ourservices-component.css";
import DocPic from "../../Images/docpic.png";
import Button from "../Button/button-componet";

export default function OurServices() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="OurServices">
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img className="imagenservices" src={DocPic} alt="" />
        <motion.h2 className="title-card">Lorem Ipsum</motion.h2>
        <motion.div className="para-card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempore
            omnis voluptatem necessitatibus eaque! Maxime explicabo ullam eius
            porro ad?
          </p>
          {isOpen && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              quod nobis cupiditate debitis repellendus, ad sint. Molestiae est
              cupiditate amet odit facilis veniam aspernatur maxime obcaecati,
              eligendi a dolore aliquid?
            </p>
          )}
        </motion.div>
        <div id="cardbutton">
          <Button onClickHandler={() => setIsOpen(!isOpen)}>Show more</Button>
        </div>
      </motion.div>
    </div>
  );
}
