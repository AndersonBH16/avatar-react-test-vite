import CarouselUpper from "../components/CarouselUpper/CarouselUpper";
import { CarouselMid } from "../components/CarouselMiddle/CarouselMid";

const Home = () => {
    return(
        <div className="content">
            <CarouselUpper />
            <CarouselMid />
        </div>        
    );
};

export default Home;