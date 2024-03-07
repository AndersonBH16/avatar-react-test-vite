import { useState } from "react";
import CarouselSlideImage from "./CarouselSlideImage/CarouselSlideImage";
import CarouselPageIndicators from "../CarouselPageIndicators/CarouselPageIndicators";
import './carouselUpper.css';
import { MdOutlineArrowBackIosNew , MdOutlineArrowForwardIos } from "react-icons/md";

const CarouselUpper = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };  
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
      <div className="carousel">
        <MdOutlineArrowBackIosNew  className="arrow arrow-left" onClick={prevSlide}/>
        {data.map((item, idx) => {          
          return (
            <CarouselSlideImage key={idx} src={item.imgURL} className={slide === idx ? "slide" : "slide slide-hidden"}/>
          );
        })}
        <MdOutlineArrowForwardIos className="arrow arrow-right" onClick={nextSlide}/>
        <CarouselPageIndicators data={data} slide={slide}/>
        {<span className="indicators">
          {data.map((_, idx) => {
            return (
              <button 
                key={idx}
                onClick={() => setSlide(idx)} 
                className={slide === idx ? "indicator" : "indicator indicator-inactive"}
              ></button>
            );
          })}
        </span>}
      </div>
    );
};

export default CarouselUpper;