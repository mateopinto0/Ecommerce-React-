import { useNavigate, useParams } from "react-router-dom"
import "./ProductSuccess.css"

export const ProductSuccess = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return(
        <div className="container-success">
            <h2>Juego cargado con exito!</h2>
            <p>Id de juego: {id}</p>
            <p>Puede cargar otro haciendo click en el boton</p>

            <button className="button" onClick={()=> navigate("/admin",{replace:true})}>
            Agregar otro Juego
            </button>
        </div>
    )
}