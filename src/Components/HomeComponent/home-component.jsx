import React from 'react'
import Button from '../Button/button-componet'
import './home-component.css'
import FotoDoctor from '../../Images/FotoDoctor.jpg'

export default function HomeComponent() {
  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-2 gap-x-96 grid-flow-row">
        <div className="text-left">
          <p className="text-5xl text-secundary-color font-bold ">
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-5xl text-primary-color font-bold">
            consectetur adipiscing
          </p>
          <p className="text-xl mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="grid grid-cols-[100px_minmax(50px,_1fr)_200px] gap-x-0 emailbox mt-9 rounded-lg shadow-lg">
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
              <p style={{ color: '#6F6F6F' }}>Our email adress</p>
              <p className="font-bold">fakeemail@gmail.com</p>
            </div>
            <div>
              <div className="mt-7">
                <Button>Get Copied</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[150px_minmax(900px,_1fr)_300px] mt-12">
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
            <img
              src={FotoDoctor}
              alt="fotodoctor"
              style={{ width: '370px', height: '459px' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
