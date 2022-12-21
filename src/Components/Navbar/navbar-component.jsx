import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LanguageSelector from "../language-selector/language-selector";
import Logo from "../../assets/logo.png";
import Button from "../Button/button-componet";
import { Text } from "../../contexts/language-context/language-context";
import ShorLine from "../../Images/shortline.png";
import PhoneIcon from "../../Images/phoneicon.png";
import Map from "../../Images/map.png";
import "./navbar-component.css";

const navigation = [
  { textId: "homeNav", href: "#", current: true },
  { textId: "aboutMeNav", href: "#", current: false },
  { textId: "servicesNav", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [isOpenDrop, setIsOpenDrop] = useState(false);
  const [isOpenMap, setIsOpenMap] = useState(false);

  const primaryNumber = "000-000-000";
  const secondaryNumber = "000-000-000";
  const url =
    "https://www.google.com/maps/place/CECIP+Centro+de+Cirug%C3%ADa+Pl%C3%A1stica+y+Especialidades+en+Rep%C3%BAblica+Dominicana,+Santo+Domingo/@18.4733301,-69.899015,17z/data=!3m1!4b1!4m5!3m4!1s0x8eaf8830679e2e1f:0x17f1016bd0008661!8m2!3d18.4733301!4d-69.8968263";
  const Links = [
    { textId: "homeNav", to: "/" },
    { textId: "aboutMeNav", to: "/" },
    { textId: "servicesNav", to: "/" },
  ];

  const OpenGoogleMaps = () => {
    window.open(url, "_blank");
  };
  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl rounded-lg px-2 shadow-md sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open main menu</span>
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
                  <p className="hidden sm:ml-3 sm:block">Dr. Carlos Regalado</p>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div className=" flex items-center justify-between">
                    <div className="hidden sm:ml-6 sm:block">
                      <ul className="flex space-x-4">
                        {Links.map(({ textId, to }) => (
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
                                onClickHandler={OpenGoogleMaps}
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
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="bg-white ring-black absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ring-1 ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "text-gray-700 block px-4 py-2 text-sm"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "text-gray-700 block px-4 py-2 text-sm"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "text-gray-700 block px-4 py-2 text-sm"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.textId}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <Text textId={item.textId} />
                </Disclosure.Button>
              ))}

              <Button onClickHandler={() => OpenGoogleMaps()}>
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
}
