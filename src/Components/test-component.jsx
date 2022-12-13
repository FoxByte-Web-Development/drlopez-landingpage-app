import NavBar from "./Navbar/navbar-component";
import HomeComponent from "./HomeComponent/home-component";
import CircleButton from "./CircleButton/circlebutton-component";
import OurServices from "./OurServices/ourservices-component";
import AboutUs from "./About us/aboutus-component";

const Test = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="mt-12">
        {/* <HomeComponent />
        <CircleButton/> */}
        {/* <OurServices /> */}
        <AboutUs />
      </div>
    </div>
  );
};

export default Test;
