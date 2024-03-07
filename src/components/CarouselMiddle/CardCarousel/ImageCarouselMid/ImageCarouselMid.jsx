import './imageCarousel.css'
const ImageCarouselMid = ({imgURL}) => {
    console.log(imgURL);
    return(
        <img
            src={imgURL}
            className="image"
        />
    );
};

export default ImageCarouselMid;