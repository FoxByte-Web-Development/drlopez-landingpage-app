import NavBar from "./Navbar/navbar-component";
import HomeComponent from "./HomeComponent/home-component";
import CircleButton from "./CircleButton/circlebutton-component";
import OurServices from "./OurServices/ourservices-component";
import AboutUs from "./About us/aboutus-component";
import Footer from "./Footer/footer-component";
import SliderShow from "./Slider/SliderShow";
const Test = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      {/* <div className="mt-12">
        <HomeComponent />
        <AboutUs />
        <OurServices />
        <div className=" mb-[200px] mt-[-2%]	">
          <SliderShow />
        </div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Test;
