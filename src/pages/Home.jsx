import CarouselUpper from "../components/CarouselUpper/CarouselUpper";
import CarouselMid from "../components/CarouselMiddle/CarouselMid";
import Banner from "../components/Banner/Banner";
import './home.css';
import {dataImg, dataImgMid} from "../assets/images/data-img";

const Home = () => {
    return(
        <div className="main-container">
            <Banner />
            <CarouselUpper data = {dataImg}/>
            <CarouselMid data = {dataImgMid}/>
        </div>
    );
};

export default Home;