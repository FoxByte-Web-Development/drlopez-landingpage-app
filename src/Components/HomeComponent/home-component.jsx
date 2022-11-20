import React from 'react'
import Button from '../Button/button-componet'

export default function HomeComponent() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10 content-center">
        <div className="text-left">
          <p className="text-5xl">Lorem ipsum dolor sit amet</p>
          <p className="text-5xl">consectetur adipiscing</p>
          <p className="text-xl mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
  )
}
