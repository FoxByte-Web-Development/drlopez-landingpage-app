import { useState } from "react";
import { Text } from "../../contexts/language-context/language-context";
import Button from "../Button/button-componet";
import "./home-component.css";
import FotoDoctor from "../../Images/FotoDoctor.png";
import FourPeople from "../../Images/FourPeople.png";

export default function HomeComponent() {
  const drEmailValue = "fakeemail@gmail.com";
  const [copyText, setCopyText] = useState("Get Copied");

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(drEmailValue);
  };

  const handleEmailCopy = () => {
    copyEmailToClipboard();
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Get Copied");
    }, 3000);
  };

  return (
    <div id="homepage-container" className="4/12 sm:ml-auto">
      <div className="grid grid-flow-row grid-cols-2 gap-x-96">
        <div className="mt-10 text-left">
          <p className="text-secundary-color text-5xl font-bold ">
            <Text textId={"page1Title1"} />
          </p>
          <p className="text-primary-color text-5xl font-bold">
            <Text textId={"page1Title2"} />
          </p>
          <p id="homeparagraf" className="mt-9 text-xl">
            <Text textId={"page1SubTitle"} />
          </p>
          <div
            id="box-homepage"
            className="emailbox 11/12 mt-9 grid h-24 grid-cols-[100px_minmax(50px,_1fr)_240px] gap-x-0 rounded-lg shadow-lg"
          >
            <div>
              <div className="elipse mt-6 ml-7 rounded-full">
                <svg
                  width="27"
                  height="23"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 ml-[14px]"
                >
                  <path
                    d="M4.44648 0C1.99075 0 0 1.99075 0 4.44648V4.89402L13.3397 12.0769L26.6789 4.89426V4.44648C26.6789 1.99075 24.6882 0 22.2324 0H4.44648Z"
                    fill="white"
                  />
                  <path
                    d="M26.6789 7.41819L13.8667 14.3171C13.5377 14.4942 13.1417 14.4942 12.8126 14.3171L0 7.41797V17.7848C0 20.2406 1.99075 22.2313 4.44648 22.2313H22.2324C24.6882 22.2313 26.6789 20.2406 26.6789 17.7848V7.41819Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="text mt-6">
              <Text textId={"page1EmailTitle"} />
              <p className="font-bold">{drEmailValue}</p>
            </div>
            <div>
              <div className="mt-8">
                <Button variant={"primarybig"} onClickHandler={handleEmailCopy}>
                  {copyText}
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-24 grid grid-cols-[230px_minmax(900px,_1fr)_300px]">
            <div className="vagina-button">
              <Button variant="secondarylearn">
                <Text
                  className={"scrollbutton"}
                  textId="page1VaginalRejuvenationButton"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <div>
            <img className="fotodoctor" src={FotoDoctor} alt="fotodoctor" />
          </div>
          <div className=" text-primary-color ml-[13%] mt-10 font-bold">
            <p>Dr. Carlos Regalado</p>
            <hr className="horizontal-line-color mt-4 ml-2 w-[115px]" />
            <img src={FourPeople} alt="fourpeople" className=" mt-4" />
            <p className=" ml-2 w-[127px] text-center">
              <Text textId={"page1PatientsSubtitle"} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
