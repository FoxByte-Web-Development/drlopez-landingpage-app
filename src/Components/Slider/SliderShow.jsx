import Vaginoplasty from "../../Images/Carousel-en/Vaginoplasty.png";
import Perinoplasty from "../../Images/Carousel-en/Perinoplasty.png";
import Labiaplasty from "../../Images/Carousel-en/Labiaplasty.png";
import Hymenoplasty from "../../Images/Carousel-en/Hymenoplasty.png";

import Vaginoplastia from "../../Images/Carousel-es/Vaginoplasty.png";
import Perinoplastia from "../../Images/Carousel-es/Perineoplastia.png";
import Labioplastia from "../../Images/Carousel-es/Labioplastia.png";
import Himenoplastia from "../../Images/Carousel-es/Himenoplastia.png";

import { useContext } from "react";
import { LanguageContext } from "../../contexts/language-context/language-context";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from "../../contexts/language-context/language-context";
import { Carousel } from "react-responsive-carousel";

import "./SliderShow.css";

const SliderShow = () => {
  const { userLanguage } = useContext(LanguageContext);

  const englishImages = [
    <div key={1} className="div-margins">
      <img src={Vaginoplasty} alt="" />
    </div>,
    <div key={2} className="div-margins">
      <img src={Perinoplasty} alt="" />
    </div>,
    <div key={3} className="div-margins">
      <img src={Labiaplasty} alt="" />
    </div>,
    <div key={4} className="div-margins">
      <img src={Hymenoplasty} alt="" />
    </div>,
  ];

  const spanishImages = [
    <div key={1} className="div-margins">
      <img src={Vaginoplastia} alt="" />
    </div>,
    <div key={2} className="div-margins">
      <img src={Perinoplastia} alt="" />
    </div>,
    <div key={3} className="div-margins">
      <img src={Labioplastia} alt="" />
    </div>,
    <div key={4} className="div-margins">
      <img src={Himenoplastia} alt="" />
    </div>,
  ];
  if (userLanguage == "en") {
    return (
      <div>
        <div className=" sm:hidden">
          <div className="text-setting title flex justify-center text-xl lg:text-5xl">
            <Text textId="page4CarouselTitle" />
          </div>
          <Carousel
            centerMode={true}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            centerSlidePercentage={100}
            infiniteLoop={true}
            swipeable={false}
          >
            {englishImages.map(el => el)}
          </Carousel>
        </div>

        <div className=" hidden sm:block">
          <div className="text-setting title flex justify-center text-xl lg:text-5xl">
            <Text textId="page4CarouselTitle" />
          </div>
          <Carousel
            centerMode={true}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            centerSlidePercentage={75}
            infiniteLoop={true}
            swipeable={false}
          >
            {englishImages.map(el => el)}
          </Carousel>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className=" block sm:hidden">
        <div className="text-setting title flex justify-center text-xl lg:text-5xl">
          <Text textId="page4CarouselTitle" />
        </div>
        <Carousel
          centerMode={true}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
          centerSlidePercentage={100}
          infiniteLoop={true}
          swipeable={false}
        >
          {spanishImages.map(el => el)}
        </Carousel>
      </div>

      <div className=" hidden sm:block">
        <div className="text-setting title flex justify-center text-xl lg:text-5xl">
          <Text textId="page4CarouselTitle" />
        </div>
        <Carousel
          centerMode={true}
          showThumbs={false}
          dynamicHeight={true}
          showStatus={false}
          centerSlidePercentage={50}
          infiniteLoop={true}
          swipeable={false}
        >
          {spanishImages.map(el => el)}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderShow;
