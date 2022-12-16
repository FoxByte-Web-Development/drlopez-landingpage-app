import logoSrc from "../../assets/logo.png";
import Button from "../Button/button-componet";
import "./navbar-component.css";
import { useState } from "react";
import { Text } from "../../contexts/language-context/language-context";
import LanguageSelector from "../language-selector/language-selector";
import "./navbar-component.css";
import ShorLine from "../../Images/shortline.png";
import PhoneIcon from "../../Images/phoneicon.png";
import Map from "../../Images/map.png";

const NavBar = () => {
  const Links = [
    { textId: "homeNav", to: "/" },
    { textId: "aboutMeNav", to: "/" },
    { textId: "servicesNav", to: "/" },
  ];
  const [open, setOpen] = useState(false);
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);

  const url =
    "https://www.google.com/maps/place/CECIP+Centro+de+Cirug%C3%ADa+Pl%C3%A1stica+y+Especialidades+en+Rep%C3%BAblica+Dominicana,+Santo+Domingo/@18.4733301,-69.899015,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf8830679e2e1f:0x17f1016bd0008661!8m2!3d18.4733301!4d-69.8968263";

  const OpenGoogleMaps = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="navbar-container">
      <div className="w-auto  rounded-lg shadow-md">
        <div className="justify-between space-x-80 px-[40px] md:flex">
          <div className="flex cursor-pointer items-center font-bold">
            <span id="logoytitulo" className="cursor-pointer ">
              <img className="inline h-7 px-2" src={logoSrc} />
              <h1>Dr. Carlos Regalado</h1>
            </span>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="absolute  top-6 cursor-pointer text-3xl md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <ul
            className={`absolute left-0 z-[-1] w-full pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map(({ textId, to }) => (
              <li key={textId} className="my-7 md:my-0 md:ml-8">
                <a href={to} className="navbar-links">
                  <Text textId={textId} />
                </a>
              </li>
            ))}
            <div className="px-5">
              <Button onClickHandler={() => setIsOpenDrop(!isOpenDrop)}>
                <Text textId="contactUsNav" />
              </Button>
              {isOpenDrop && (
                <div className={"dropdown-contact"}>
                  <h1>Get in contact</h1>
                  <img src={ShorLine} alt="" />
                  <ul>
                    <div id="first-numer">
                      <img id="phone" src={PhoneIcon} alt="" />
                      <li> 000-000-000</li>
                    </div>

                    <div id="second-numer">
                      <img id="phone" src={PhoneIcon} alt="" />
                      <li>000-000-000</li>
                    </div>
                  </ul>
                </div>
              )}
              <Button onClickHandler={() => setIsOpenMap(!isOpenMap)}>
                <Text textId="locationNav" />
              </Button>
              {isOpenMap && (
                <div className={"dropdown-contact"}>
                  <h1>Get Location</h1>
                  <img id="mapline" src={ShorLine} alt="" />
                  <img src={Map} alt="" />
                  <Button
                    onClickHandler={() => OpenGoogleMaps()}
                    variant="primarymap"
                  >
                    Open Maps
                  </Button>
                </div>
              )}
            </div>
            <LanguageSelector />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
