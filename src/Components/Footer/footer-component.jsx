import React from "react";
import Button from "../Button/button-componet";
import Instagram from "../../Images/instagram.png";
import Line from "../../Images/footerline.png";
import "./footer-component.css";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <h1>DR. CARLOS REGALADO</h1>
      <p id="footer-para">
        Sigueme en mi red social de Instagram, para ver más contenido
        relacionado a mi servicio.
      </p>
      <Button variant="instagram">
        <img id="logo-ig" src={Instagram} alt="" />
        Instagram
      </Button>
      <img id="linea-footer" src={Line}></img>
      <p id="copyright">{`Copyright ©${year}. Design and powered by Foxbyte Software Development `}</p>
    </footer>
  );
}
