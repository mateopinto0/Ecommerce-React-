import { createContext, useState, useContext, use } from "react";
import { useNavigate} from "react-router-dom";


//CONTEXTO PARA EL CARRITO DE COMPRAS
const CartContext = createContext();

export const useCart = () => {

    const context= useContext(CartContext);
    if(!context){
        throw new Error("useCart debe ser utilizado dentro de un CartProvider");
    }

    return context;
}

//Provider para el carrito de compras

export const CartProvider = ({children}) => {

    const navigate = useNavigate();
    const [cart,setCart] = useState([]);

    const isInCart = (id) => {
        const isInCart=cart.some((item) => item.id === id);
        return isInCart;
    }

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (item) => {
        
        if(isInCart(item.id)){
            alert("El producto ya está en el carrito");
            return
        }

        setCart([...cart, item]);
        console.log("Producto agregado al carrito:");

    }

    const removeItem = (id) => {

        //retorna un array con todos los elementos que no coincidan con el id del producto a eliminar
        const updateCart = cart.filter((element)=> element.id !== id);

        setCart(updateCart);
        alert("Producto eliminado");

    }

    const getTotalCart = () => {
        return cart.length;
    }

    const getTotalPrice = () => {
        //reduce es un método de array que se utiliza para reducir un array a un solo valor, en este caso, el total del precio de los productos en el carrito
        return cart.reduce((total, item) => total + item.precio, 0);
    }

    const checkout = () => {
        alert("Gracias por tu compra");
        clearCart();
        Navigate("/");
    }

    const getCart = () => {
        return cart;
    }

   
    const values = {
        clearCart,
        addToCart,
        removeItem,
        getTotalCart,
        getTotalPrice,
        checkout,
        getCart
       
    };
    
    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )}
