import Vagina from "../../Images/Vaginoplasty-SP.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./SliderShow.css";

const SliderShow = () => {
  return (
    <div>
      <Carousel
        centerMode={true}
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={true}
      >
        <div>
          <img src={Vagina} alt="" />
        </div>
        <div>
          <img src={Vagina} alt="" />
        </div>
        <div>
          <img src={Vagina} alt="" />
        </div>
        <div>
          <img src={Vagina} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderShow;
