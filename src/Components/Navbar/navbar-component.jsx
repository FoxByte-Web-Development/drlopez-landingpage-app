import { useState } from "react";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Text } from "../../contexts/language-context/language-context";
import LanguageSelector from "../language-selector/language-selector";
import Button from "../Button/button-componet";
import Logo from "../../assets/logo.png";
import ShorLine from "../../Images/shortline.png";
import PhoneIcon from "../../Images/phoneicon.png";
import Map from "../../Images/map.png";
import "./navbar-component.css";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NavBar = () => {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);

  const primaryNumber = "000-000-000";
  const secondaryNumber = "000-000-000";

  const locationUrl = "https://goo.gl/maps/ck5yZTAgM9gXZYVA9";

  const navigationLinks = [
    { textId: "homeNav", to: "/", current: true },
    { textId: "aboutMeNav", to: "/", current: false },
    { textId: "servicesNav", to: "/", current: false },
  ];

  const openGoogleMaps = () => {
    window.open(locationUrl, "_blank");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-full rounded-lg px-2 shadow-md sm:px-6 md:mx-20 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Logo}
                    alt="Your Company"
                  />
                  <p className="hidden font-bold sm:ml-3 sm:block">
                    Dr. Carlos Regalado
                  </p>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className=" flex items-center justify-between">
                    <div className="hidden sm:ml-6 sm:block">
                      <ul className="flex space-x-4">
                        {navigationLinks.map(({ textId, to }) => (
                          <li key={textId} className="my-7 md:my-0 md:ml-8">
                            <a href={to} className="navbar-links">
                              <Text textId={textId} />
                            </a>
                          </li>
                        ))}
                        <div className="px-5">
                          <Button
                            onClickHandler={() => setIsOpenDrop(!isOpenDrop)}
                          >
                            <Text textId="contactUsNav" />
                          </Button>
                          {isOpenDrop && (
                            <div className="dropdown-contact">
                              <h1>
                                <Text textId="contactInfo" />
                              </h1>
                              <img src={ShorLine} alt="line-img" />
                              <ul>
                                <div id="first-numer">
                                  <img
                                    id="phone"
                                    src={PhoneIcon}
                                    alt="phone-icon"
                                  />
                                  <li>{primaryNumber}</li>
                                </div>

                                <div id="second-numer">
                                  <img
                                    id="phone"
                                    src={PhoneIcon}
                                    alt="phone-icon"
                                  />
                                  <li>{secondaryNumber}</li>
                                </div>
                              </ul>
                            </div>
                          )}
                          <Button
                            onClickHandler={() => setIsOpenMap(!isOpenMap)}
                          >
                            <Text textId="locationNav" />
                          </Button>
                          {isOpenMap && (
                            <div className="dropdown-contact">
                              <h1>
                                <Text textId="locationInfo" />
                              </h1>
                              <img id="mapline" src={ShorLine} alt="map-img" />
                              <img src={Map} alt="" />
                              <Button
                                onClickHandler={openGoogleMaps}
                                variant="primarymap"
                              >
                                <Text textId="locationBtn" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </ul>
                    </div>
                    <LanguageSelector />
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <p className="font-bold">Dr. Carlos Regalado</p>
              {navigationLinks.map(({ textId, to, current }) => (
                <Disclosure.Button
                  key={textId}
                  as="a"
                  href={to}
                  className={classNames(
                    current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={current ? "page" : undefined}
                >
                  <Text textId={textId} />
                </Disclosure.Button>
              ))}

              <Button onClickHandler={() => openGoogleMaps()}>
                <Text textId="locationNav" />
              </Button>
              <Button onClickHandler={() => setIsOpenDrop(!isOpenDrop)}>
                <Text textId="contactUsNav" />
              </Button>
              {isOpenDrop && (
                <div className="dropdown-contact">
                  <h1>
                    <Text textId="contactInfo" />
                  </h1>
                  <img src={ShorLine} alt="line-img" />
                  <ul>
                    <div id="first-numer">
                      <img id="phone" src={PhoneIcon} alt="phone-icon" />
                      <li>{primaryNumber}</li>
                    </div>

                    <div id="second-numer">
                      <img id="phone" src={PhoneIcon} alt="phone-icon" />
                      <li>{secondaryNumber}</li>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
