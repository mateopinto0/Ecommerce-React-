import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import { Item } from "../Item/Item"
import "./ItemDetail.css"

export const ItemDetail = ({item}) => {
    const {addToCart} = useCart();
    const addToCartHandler = () => {
        addToCart(item);
    }
    return(
        <Item {...item}>
            <button onClick={addToCartHandler} className="button">Agregar al carrito</button>
        </Item>
    )
}