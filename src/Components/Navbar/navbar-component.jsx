import logoSrc from "../../assets/logo.png";
import Button from "../Button/button-componet";
import { useState } from "react";

const NavBar = () => {
  const Links = [
    { name: "Home", to: "/" },
    { name: "About us", to: "/" },
    { name: "Services", to: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="top-0 left-0 w-ful  rounded-lg shadow-md">
      <div className="items-center justify-between py-4 px-[74px] md:flex md:px-10">
        <div className="flex cursor-pointer items-center font-bold">
          <span className="cursor-pointer ">
            <img className="inline h-7 px-2" src={logoSrc} />
            Dr. Carlos Regalado
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map(link => (
            <li key={link.name} className="my-7 md:my-0 md:ml-8">
              <a
                href={link.to}
                className=" hover:underline hover:decoration-teal-2 hover:decoration-4 hover:underline-offset-8  duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          <div className="px-5">
            <Button>Contact us</Button>
            <Button>Location</Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
