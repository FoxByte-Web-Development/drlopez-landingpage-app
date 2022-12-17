import Vagina from "../../Images/Vaginoplasty-SP.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from "../../contexts/language-context/language-context";
import { Carousel } from "react-responsive-carousel";

import "./SliderShow.css";

const SliderShow = () => {
  return (
    <div>
      <div className="text-setting flex justify-center text-xl lg:text-5xl">
        <Text textId="page4CarouselTitle" />
      </div>
      <Carousel
        centerMode={true}
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
        centerSlidePercentage={75}
      >
        <div className="div-margins">
          <img src={Vagina} alt="" />
        </div>
        <div className="div-margins">
          <img src={Vagina} alt="" />
        </div>
        <div className="div-margins">
          <img src={Vagina} alt="" />
        </div>
        <div className="div-margins">
          <img src={Vagina} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderShow;
