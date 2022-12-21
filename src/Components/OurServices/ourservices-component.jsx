import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ourservices-component.css";
import DocPic from "../../Images/docpic.png";
import Arrow from "../../Images/arrow.png";
import Button from "../Button/button-componet";
import { func } from "prop-types";
import { Text } from "../../contexts/language-context/language-context";

export default function OurServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [style, setStyle] = useState("card1");
  const [style2, setStyle2] = useState("card2");
  const [style3, setStyle3] = useState("card3");
  const [rotate, setRotate] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [rotate3, setRotate3] = useState(false);

  return (
    <div className="ourservices-container">
      <h1 id="ourservices-title">
        <Text textId="page3ServiceTitle" />
      </h1>

      <div className="OurServices">
        <div className="Card1">
          <motion.div
            layout="position"
            className={style}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img className="imagenservices" src={DocPic} alt="" />
            <motion.h2 className="title-card">
              <Text textId="page3Card1Title" />
            </motion.h2>
            <motion.div className="para-card">
              <p>
                <Text textId="page3Card1ShortText" />
              </p>
              {isOpen && (
                <p>
                  <Text textId="page3Card1LargeText" />
                </p>
              )}
            </motion.div>
            <div id="cardbutton">
              <Button
                variant="primaryshowmore"
                onClickHandler={() => {
                  setIsOpen(!isOpen);
                  setRotate(!rotate);
                  {
                    isOpen ? setStyle("card1") : setStyle("card1v2");
                  }
                }}
              >
                {isOpen ? "Show Less" : "Show More"}
                <motion.img
                  animate={{ rotate: rotate ? 180 : 1 }}
                  src={Arrow}
                  transition={{
                    duration: 0.7,

                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="Card2">
          <motion.div
            layout="position"
            className={style2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img className="imagenservices" src={DocPic} alt="" />
            <motion.h2 className="title-card">
              <Text textId="page3Card2Title" />
            </motion.h2>
            <motion.div className="para-card">
              <p>
                <Text textId="page3Card2ShortText" />
              </p>
              {isOpen2 && (
                <p>
                  <Text textId="page3Card2LargeText" />
                </p>
              )}
            </motion.div>
            <div id="cardbutton">
              <Button
                variant="primaryshowmore"
                onClickHandler={() => {
                  setIsOpen2(!isOpen2);
                  setRotate2(!rotate2);
                  {
                    isOpen2 ? setStyle2("card2") : setStyle2("card2v2");
                  }
                }}
              >
                Show More
                <motion.img
                  animate={{ rotate: rotate2 ? 180 : 1 }}
                  src={Arrow}
                  transition={{
                    duration: 0.7,

                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="Card3">
          <motion.div
            layout="position"
            className={style3}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img className="imagenservices" src={DocPic} alt="" />
            <motion.h2 className="title-card">
              <Text textId="page3Card3Title" />
            </motion.h2>
            <motion.div className="para-card">
              <p>
                <Text textId="page3Card3ShortText" />
              </p>
              {isOpen3 && (
                <p>
                  <Text textId="page3Card3LargeText" />
                </p>
              )}
            </motion.div>
            <div id="cardbutton">
              <Button
                variant="primaryshowmore"
                onClickHandler={() => {
                  setIsOpen3(!isOpen3);
                  setRotate3(!rotate3);
                  {
                    isOpen3 ? setStyle3("card3") : setStyle3("card3v2");
                  }
                }}
              >
                Show more{" "}
                <motion.img
                  animate={{ rotate: rotate3 ? 180 : 1 }}
                  src={Arrow}
                  transition={{
                    duration: 0.7,

                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
