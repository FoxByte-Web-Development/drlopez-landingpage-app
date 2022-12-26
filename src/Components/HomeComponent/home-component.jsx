import { useState, useContext, useEffect } from "react";
import {
  Text,
  LanguageContext,
} from "../../contexts/language-context/language-context";
import Button from "../Button/button-componet";
import mailIcon from "../../Images/mail-icon.png";
import FotoDoctor from "../../Images/FotoDoctor.png";
import FourPeople from "../../Images/FourPeople.png";
import "./home-component.css";

const Home = () => {
  const { dictionary } = useContext(LanguageContext);
  const drEmailValue = "fakeemail@gmail.com";
  const textChangeDuration = 3000;
  const [copyText, setCopyText] = useState(dictionary.page1CopyButton);

  useEffect(() => {
    setCopyText(dictionary.page1CopyButton);
  }, [dictionary.page1CopyButton]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(drEmailValue);
  };

  const scrollIntoSlider = () => {
    document
      .getElementById("slider-view")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleEmailCopy = () => {
    copyEmailToClipboard();
    setCopyText(dictionary.page1CopyButton2);
    setTimeout(() => {
      setCopyText(dictionary.page1CopyButton);
    }, textChangeDuration);
  };

  return (
    <div id="home-component" className="home-container">
      <div className="left-side">
        <p id="home-title" className="text-secundary-color font-bold ">
          <Text textId="page1Title1" />
        </p>
        <p id="home-title" className="text-primary-color font-bold">
          <Text textId="page1Title2" />
        </p>
        <p className="mt-9 text-justify">
          <Text textId="page1SubTitle" />
        </p>
        <div className="email-container">
          <img className="email-icon" src={mailIcon} alt="elipse-image" />
          <div>
            <p>
              <Text textId="page1EmailTitle" />
            </p>
            <p className="font-bold">{drEmailValue}</p>
          </div>
          <Button
            id="copy-btn"
            variant="primarybig2"
            onClickHandler={handleEmailCopy}
          >
            {copyText}
          </Button>
        </div>
        <Button variant="secondarylearn" onClickHandler={scrollIntoSlider}>
          <Text
            className="scrollbutton"
            textId="page1VaginalRejuvenationButton"
          />
        </Button>
      </div>
      <div className="right-side">
        <div id="doctor-img-home">
          <img className="fotodoctor" src={FotoDoctor} alt="fotodoctor" />
        </div>
        <div
          id="doctor-info-home"
          className=" text-primary-color margin-text mt-10 font-bold"
        >
          <div id="four-people">
            <p>Dr. Carlos Regalado</p>
            <hr className="horizontal-line-color mt-4 ml-5 w-[115px]" />
            <img src={FourPeople} alt="fourpeople" className=" mt-4 ml-3" />
            <p className=" ml-4 w-[127px] text-center">
              <Text textId="page1PatientsSubtitle" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
