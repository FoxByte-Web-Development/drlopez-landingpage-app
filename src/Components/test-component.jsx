import NavBar from "./Navbar/navbar-component";
import HomeComponent from "./HomeComponent/home-component";
import CircleButton from "./CircleButton/circlebutton-component";
import OurServices from "./OurServices/ourservices-component";
import AboutUs from "./About us/aboutus-component";
import Footer from "./Footer/footer-component";

const Test = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="mt-12">
        <HomeComponent />
        <CircleButton />
        <AboutUs />
        <OurServices />
        <Footer />
      </div>
    </div>
  );
};

export default Test;
