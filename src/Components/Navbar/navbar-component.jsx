import logoSrc from "../../assets/logo.png";
import Button from "../Button/button-componet";
import "./navbar-component.css";
import { useState } from "react";
import { Text } from "../../contexts/language-context/language-context";
import LanguageSelector from "../language-selector/language-selector";
import "./navbar-component.css";

const NavBar = () => {
  const Links = [
    { textId: "homeNav", to: "/" },
    { textId: "aboutUsNav", to: "/" },
    { textId: "servicesNav", to: "/" },
  ];
  const [open, setOpen] = useState(false);

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
              <Button>
                <Text textId="contactUsNav" />
              </Button>
              <Button>
                <Text textId="locationNav" />
              </Button>
            </div>
            <LanguageSelector />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
