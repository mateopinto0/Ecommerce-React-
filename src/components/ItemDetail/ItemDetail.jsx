import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import "./ItemDetail.css"

export const ItemDetail = ({id,imagenUrl,nombre,precio,descripcion}) => {
    const {addToCart} = useCart();
    const addToCartHandler = () => {
        addToCart({id,imagenUrl,nombre,precio,descripcion});
    }
    return(
          <div className="card-detail">
            <img src={imagenUrl} alt={nombre} />
            
            <div className="card-detail-info">
                <h2>{nombre}</h2>
                <p className="card-detail-descripcion">{descripcion}</p>
                <h4>Precio: {precio} $</h4>
                <button className="button" onClick={addToCartHandler}>Agregar al carrito</button>
            </div>
        </div>
    )
}