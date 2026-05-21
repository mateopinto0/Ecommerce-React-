import { BotonCarrito } from '../BotonCarrito/BotonCarrito'
import { BotonFavorito } from '../BotonFavorito/BotonFavorito'
import './Item.css'

export const Item = ({imagenUrl,nombre,precio,children}) => {
    return(
        <div className="card">
            <img src={imagenUrl} alt={nombre} />
            <h3>{nombre}</h3>
            <h4>Precio: {precio} $</h4>
            <div className='botonesContainer'>
            
            {children}
            </div>
        </div>
    )
}