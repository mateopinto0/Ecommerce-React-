import { BotonCarrito } from '../BotonCarrito/BotonCarrito'
import { BotonFavorito } from '../BotonFavorito/BotonFavorito'
import './Item.css'

export const Item = ({imagenUrl,nombre,precio}) => {
    return(
        <div className="card">
            <img src={imagenUrl} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: {precio} $</p>
            <div className='botonesContainer'>
            <BotonFavorito></BotonFavorito>
            </div>
        </div>
    )
}