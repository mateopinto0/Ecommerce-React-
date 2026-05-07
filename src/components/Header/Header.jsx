import { Nav } from "../Nav/Nav"
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <>
        <header className="header">
           <Link to={"/"}> <img src={logo} alt="logo"  className="logo"></img> </Link>    
            <Nav></Nav>
        </header>
        </>
    )
}