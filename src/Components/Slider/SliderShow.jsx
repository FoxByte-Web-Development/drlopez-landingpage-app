import { Carousel } from "react-responsive-carousel";
import Vagina from "../../Images/Vaginoplasty-SP.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./SliderShow.css";

const SliderShow = () => {
  return (
    <div>
      <Carousel centerMode={true} showThumbs={false} showArrows={true}>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
        <div className="margin-div">
          <img src={Vagina} alt="vagina" />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderShow;
