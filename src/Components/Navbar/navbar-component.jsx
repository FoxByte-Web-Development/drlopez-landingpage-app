import logoSrc from "../../assets/logoPlaceHolder.png";
import Button from "../Button/button-componet";

const NavBar = () => {
  return (
    <nav className="shadow-lg h-24 border">
      <div className="container flex">
        <div className="flex basis-1/2">
          <img src={logoSrc} alt="logo" className="w-16 h-16" />
          <p>LOGO</p>
        </div>
        <div className="flex basis-1/4">
          <p className="nav-link">Home</p>
          <p className="nav-link">About us</p>
          <p className="nav-link">Services</p>
          <p className="nav-link">Contact</p>
        </div>
        <div className="flex basis-1/2">
          <Button>Contact us</Button>
          <Button>Location</Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
