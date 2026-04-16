import { useState } from "react"
import './BotonFavorito.css';

export const BotonFavorito = () => {

    const [botonFavorito, setBotonFavorito] = useState(false);

    const toggleBoton = () => {
        setBotonFavorito(!botonFavorito);
    }

    return(
        <div className="containerBoton">
            <span onClick={toggleBoton} className={`material-symbols-outlined botonFavorito ${botonFavorito ? "activo" : "desactivado"}`}>star</span>        
        </div>
    )

}