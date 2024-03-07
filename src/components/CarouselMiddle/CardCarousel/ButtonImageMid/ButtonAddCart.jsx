import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './buttonAddCart.css';

const ButtonAddCart = () => {
    return(
        <>
            <Button variant="dark" className="btn-agregar">Agregar al carrito</Button>
        </>        
    );
};

export default ButtonAddCart;