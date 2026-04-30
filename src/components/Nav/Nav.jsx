
import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    return(
       
        <nav className="nav">
            <li><Link to={"/"}>Inicio</Link></li>
            <li><Link to={"/carrito"}>Carrito</Link></li>
        </nav>
       
    )
}