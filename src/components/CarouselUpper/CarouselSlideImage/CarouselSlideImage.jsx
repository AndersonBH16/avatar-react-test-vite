import './carouselSlideImage.css';

const CarouselSlideImage = ({src, className}) => {
    return(
        <img
            src={src}
            className={className}
        />
    );
};

export default CarouselSlideImage;