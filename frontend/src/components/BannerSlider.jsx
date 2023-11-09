import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slide1 from "../assets/slide-1.png";
import Slide2 from "../assets/slide-2.png";
import Slide3 from "../assets/slide-3.png";

import ContentWrapper from "../components/ContentWrapper";

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      url: Slide2,
    },
    {
      id: 2,
      url: Slide3,
    },
    {
      id: 3,
      url: Slide1,
    },
  ];

  return (
    <>
      <ContentWrapper>
        <Slider {...settings} className="w-[94%] mx-auto mb-5">
          {slides.map((slide) => (
            <img src={slide.url} alt="slider" key={slide.id} />
          ))}
        </Slider>
      </ContentWrapper>
    </>
  );
};
export default BannerSlider;
