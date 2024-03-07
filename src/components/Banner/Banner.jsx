import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ButtonAddCart from "../CarouselMiddle/CardCarousel/ButtonImageMid/ButtonAddCart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./banner.css";

const Banner = () => {
    const [cartCount, setCartCount] = useState(0);

    const updateCartCount = (count) => {
        setCartCount(count);
    };

    return (
        <div className="banner" style={{ backgroundColor: "#C300A2" }}>
            <div className="logo-container">
                <div className="logo">Logo</div>
            </div>
            <div className="search-container">
                <input type="text" placeholder="Buscar productos" className="form-control" />
            </div>
            <div className="login-text">Iniciar sesión</div>
            <div className="login-text">Mis compras</div>
            <div className="cart-container">
                <ButtonAddCart updateCartCount={updateCartCount} />
                <FaShoppingCart className="cart-icon" />
                {cartCount > 0 && <div className="cart-count">{cartCount}</div>}
            </div>
        </div>
    );
};

export default Banner;