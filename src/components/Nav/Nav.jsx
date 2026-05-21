
import { Link } from "react-router-dom";
import "./Nav.css";
import { CartProvider, useCart } from "../../context/CartContext";

export const Nav = () => {
    
    const {getTotalCart} = useCart();
    const totalCart = getTotalCart();
    
    return(
       
        <nav className="nav">
            <li><Link to={"/"}>Inicio</Link></li>
            <li><Link to={"/carrito"}>Carrito {totalCart > 0 && <span> {totalCart}</span>}
            </Link></li>
        </nav>
       
    )
}