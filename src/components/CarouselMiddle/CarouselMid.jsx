import { useState, useEffect } from "react";
import CardCarousel from "./CardCarousel/CardCarousel";
import './carouselMid.css';
import { MdOutlineArrowBackIosNew , MdOutlineArrowForwardIos } from "react-icons/md";

const CarouselMid = ({data}) => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6;
    const totalPages = Math.ceil(data.length / cardsPerPage);

    const nextSlide = () => {
        setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
    };
    
    const prevSlide = () => {
        setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
    };

    const getCurrentPageData = () => {
        const startIndex = currentPage * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        return data.slice(startIndex, endIndex);
    };

    useEffect(() => {    
        setCurrentPage(0);
    }, [data]);    

    return(
        <div className="container-carousel-mid">
            <MdOutlineArrowBackIosNew  className="arrow arrow-left" onClick={prevSlide}/>
            {getCurrentPageData().map((item, index) => {
                return (
                    <CardCarousel key={index} imgURL = {item.imgURL}/>                    
                );
            })}
            <MdOutlineArrowForwardIos className="arrow arrow-right" onClick={nextSlide}/>
        </div>
    );
};

export default CarouselMid;