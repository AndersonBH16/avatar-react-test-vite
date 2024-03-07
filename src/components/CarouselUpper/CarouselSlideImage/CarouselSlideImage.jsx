import { Link } from 'react-router-dom';
import './carouselSlideImage.css';

const CarouselSlideImage = ({src, className}) => {
    return(
        <Link to={"https://linio.falabella.com.pe/linio-pe/category/cat50678/Computadoras?sid=SIS-LIPE_Vitrina3_Always_On_W51_computo_"}>
            <img
                src={src}
                className={className}
            />
        </Link>        
    );
};

export default CarouselSlideImage;