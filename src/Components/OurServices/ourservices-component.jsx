import React, { useState } from "react";
import { motion } from "framer-motion";
import "./ourservices-component.css";
import DocPic from "../../Images/docpic.png";
import Arrow from "../../Images/arrow.png";
import Button from "../Button/button-componet";
import { func } from "prop-types";

export default function OurServices() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [style, setStyle] = useState("card1")
  const [style2, setStyle2] = useState("card2")
  const [style3, setStyle3] = useState("card3")
  const [rotate, setRotate] = useState(false)
  const [rotate2, setRotate2] = useState(false)
  const [rotate3, setRotate3] = useState(false)

  

  return (
    <div className="ourservices-container">
      <h1>Our Services</h1>
    
    <div className="OurServices">
        <div className="Card1">
          <motion.div
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
            <motion.h2 className="title-card">Vaginoplasty</motion.h2>
            <motion.div className="para-card">
              <p>
              Es el mejoramiento estético por medio quirúrgico de las estructuras vulvares, diseñado para embellecer y rejuvenecer. 
              </p>
              {isOpen && (
                <p>
                   Con este procedimiento tanto la mujer como su pareja logran aumentar y mejorar las relaciones sexuales.
                </p>
              )}
            </motion.div>
            <div id="cardbutton">
              <Button variant="primaryshowmore" onClickHandler={() => {setIsOpen(!isOpen); setRotate(!rotate); {isOpen ? setStyle("card1") : setStyle("card1v2") }}}>{isOpen ? "Show Less" : "Show More" }
              <motion.img  
              animate = {{rotate: rotate ? 180 : 1}} 
              src={Arrow}  
              transition={{
              duration: 0.5,
              
              ease: [0, 0.71, 0.2, 1.01],
            }}/></Button>
            </div>
          </motion.div>
      </div>
      <div className="Card2">
          <motion.div
            className={style2}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              // ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img className="imagenservices" src={DocPic} alt="" />
            <motion.h2 className="title-card">Gynecology</motion.h2>
            <motion.div className="para-card">
              <p>
              Campo de la medicina que se especializa en la atención de las mujeres durante el embarazo y el parto.
              </p>
              {isOpen2 && (
              <p>
              También se especializa en el diagnóstico de enfermedades de los órganos reproductivos femeninos.
              </p>
              )}
            </motion.div>
            <div id="cardbutton">
            <Button variant="primaryshowmore" onClickHandler={() => {setIsOpen2(!isOpen2); setRotate2(!rotate2); {isOpen2 ? setStyle2("card2") : setStyle2("card2v2") }}}>Show More 
              <motion.img  
              animate = {{rotate: rotate2 ? 180 : 1}} 
              src={Arrow}  
              transition={{
              duration: 0.5,
              
              ease: [0, 0.71, 0.2, 1.01],
            }}/></Button>
            </div>
          </motion.div>
      </div>
      <div className="Card3">
          <motion.div
            className={style3}
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
              {isOpen3 && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                  quod nobis cupiditate debitis repellendus, ad sint. Molestiae est
                  cupiditate amet odit facilis veniam aspernatur maxime obcaecati,
                  eligendi a dolore aliquid?
                </p>
              )}
            </motion.div>
            <div id="cardbutton">
              <Button variant="primaryshowmore" onClickHandler={() => {setIsOpen3(!isOpen3); setRotate3(!rotate3); {isOpen3 ? setStyle3("card3") : setStyle3("card3v2") }}}>Show more <motion.img  
              animate = {{rotate: rotate3 ? 180 : 1}} 
              src={Arrow}  
              transition={{
              duration: 0.5,
              
              ease: [0, 0.71, 0.2, 1.01],
            }}/></Button>
            </div>
          </motion.div>
      </div>
    </div>
    </div>
  );
}
