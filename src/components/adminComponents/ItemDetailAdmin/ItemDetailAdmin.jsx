import { Link } from "react-router-dom"
import "./ItemDetailAdmin.css"

export const ItemDetailAdmin = ({id,imagenUrl,nombre,descripcion,precio}) => {

    return(
        <div className="container-detail-admin">
        <div className="card-detail-admin">
            <img src={imagenUrl} alt={nombre} />
            
            <div className="card-detail-admin-info">
                <h2>{nombre}</h2>
                <p className="card-detail-admin-descripcion">{descripcion}</p>
                <h4>Precio: {precio} $</h4>
                <div className="container-button">
                    <Link to={"/admin/dashboard"} className="button">Volver</Link>
                    <Link to={"/admin/editar-item/" + id} className="button" >Editar</Link>
                </div>
            </div>
        </div>
        </div>
    )
}