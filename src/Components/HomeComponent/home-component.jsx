import React from "react";
import Button from "../Button/button-componet";
import "./home-component.css";
import FotoDoctor from "../../Images/FotoDoctor.png";

export default function HomeComponent() {
  return (
    <div className="sm:ml-auto lg:ml-[7%]">
      <div className="grid grid-flow-row grid-cols-2 gap-x-96">
        <div className="text-left">
          <p className="text-secundary-color text-5xl font-bold ">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-primary-color text-5xl font-bold">
            consectetur adipiscing
          </p>
          <p className="mt-9 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="emailbox mt-9 grid grid-cols-[100px_minmax(50px,_1fr)_200px] gap-x-0 rounded-lg shadow-lg">
            <div>
              <div className="elipse mt-6 ml-7 rounded-full">
                <svg
                  width="27"
                  height="23"
                  viewBox="0 0 27 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 ml-3"
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
              <p style={{ color: "#6F6F6F" }}>Our email adress</p>
              <p className="font-bold">fakeemail@gmail.com</p>
            </div>
            <div>
              <div className="mt-7">
                <Button>Get Copied</Button>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-[150px_minmax(900px,_1fr)_300px]">
            <div>
              <Button variant="secondary">Scroll Down</Button>
            </div>
            <div>
              <Button variant="secondary">Learn more about vaginoplasty</Button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={FotoDoctor} alt="fotodoctor" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
