import { useCart } from "../../context/CartContext";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";
import { Item } from "../Item/Item";
import "./Cart.css"
import { useState } from "react";
import { CartList } from "./CartList";
import { CartSummary } from "./CartSummary";

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
        <CartList cart={cart} onRemoveItem={removeItemHandler} onQuantityChange={updateQuantity}></CartList>
        <CartSummary totalPrice={totalPrice} onClearCart={clearCart} onCheckout={checkoutHandler}></CartSummary>
    </div>
)
}