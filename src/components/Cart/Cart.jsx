import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import { Item } from "../Item/Item";
import "./Cart.css"
import { useState } from "react";

export const Cart = () => {

 

const{removeItem,getCart,getTotalCart,getTotalPrice,checkout,clearCart,updateQuantity} = useCart();
const cart = getCart();
const totalCart = getTotalCart();
const totalPrice = getTotalPrice();

const [subtotales, setSubtotales] = useState({});
const totalGeneral = Object.values(subtotales).reduce((acc, val) => acc + val, 0);

const removeItemHandler = (id) => {
    removeItem(id);
}
const clearCartHandler = () => {
    if(cart.length === 0){
        alert("El carrito ya está vacío");
        return
    }
    clearCart();
}
const checkoutHandler = () => {
    if(cart.length === 0){
        alert("El carrito está vacío");
        return
    }
    checkout();
}

return(
    <div className="carrito">
        <h1>Carrito de Compras</h1>
        <div className="carrito-items">
        { cart.length === 0 ? <p>El carrito está vacío.</p> :  cart.map((item) => (
            
            <Item key={item.id} {...item}>
                <BotonCarrito precio={item.precio} onQuantityChange={(qty) => updateQuantity(item.id, qty)}></BotonCarrito>
                <button className="button-cart-red" onClick={() => removeItemHandler(item.id)}>
                    Eliminar del carrito
                </button>
            </Item>
            
        )) }</div>

        <h3>Precio total : {totalPrice} ARS</h3>
        <button className="button" onClick={() => clearCartHandler()}>
            Vaciar Carrito
        </button>
        <button className="button" onClick={() => checkoutHandler()}>
            Finalizar Compra
        </button>
    </div>
)
}