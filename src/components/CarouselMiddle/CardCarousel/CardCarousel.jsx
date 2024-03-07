import { useState } from "react";
import ButtonAddCart from "./ButtonImageMid/ButtonAddCart";
import DescripcionImageMid from "./DescripcionImageMid/DescripcionImageMid";
import ImageCarouselMid from "./ImageCarouselMid/ImageCarouselMid";
import './cardCarousel.css';

const CardCarousel = ({imgURL}) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        console.log("Mouse enter");
        setHovered(true);
    };
    
    const handleMouseLeave = () => {
        console.log("Mouse leave");
        setHovered(false);
    };
    
    return(
        <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>            
            <ImageCarouselMid imgURL = {imgURL}/>
            <DescripcionImageMid />
            <div className="btn-placeholder">
            {
                isHovered && (<ButtonAddCart />)
            }
            </div>        
        </div>
    );
};

export default CardCarousel;