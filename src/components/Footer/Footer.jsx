
import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
             <h2>Playzone</h2>

        <ul className="footer__links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
        </ul>

        <ul className="footer__social">
        <li><a href="#">WhatsApp</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
        </ul>

        <p className="footer__copy">
        © 2026 Playzone
        </p>
        </footer>
    )
}