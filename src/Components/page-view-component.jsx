import NavBar from "./Navbar/navbar-component";
import Home from "./HomeComponent/home-component";
import OurServices from "./OurServices/ourservices-component";
import AboutUs from "./About us/aboutus-component";
import Footer from "./Footer/footer-component";
import SliderShow from "./Slider/SliderShow";

const PageView = () => {
  return (
    <div>
      {/* <div>
        <NavBar />
      </div> */}
      <div className="mt-12">
        <Home />
        <AboutUs />
        <OurServices />
        <div className="mb-[200px] mt-[-2%]">
          <SliderShow />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default PageView;
