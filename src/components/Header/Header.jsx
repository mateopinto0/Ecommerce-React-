import { Nav } from "../Nav/Nav"
import "./Header.css";

export const Header = () => {
    return (
        <>
        <header className="header">
            <h1>Playzone</h1>
            <Nav></Nav>
        </header>
        </>
    )
}