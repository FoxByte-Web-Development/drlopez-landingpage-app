import React from "react";
import Button from "./Button/button-componet";
import NavBar from "./Navbar/navbar-component";
export default function Test() {
  return (
    <div>
      <NavBar />
      <br />
      <Button>Button fill</Button>
      <Button variant="secondary">Button with border</Button>
    </div>
  );
}
