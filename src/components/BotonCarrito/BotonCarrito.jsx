import { useState } from "react"
import './BotonCarrito.css'

export const BotonCarrito = ({precio = 0, onQuantityChange}) => {
    
    const[contador,setContador]= useState(1);
    
    const incrementar = () =>{
        const nuevo= contador + 1;
        setContador(nuevo);
        onQuantityChange(nuevo);
    }

    const decrementar = () =>{
        if(contador >= 1){
            const nuevo = contador - 1;
            setContador(nuevo);
            onQuantityChange(nuevo);
        }
    }

    return(
        <div className="container">
            <button className="botonesCarrito" onClick={decrementar}>-</button>
            <p>Cantidad: {contador}</p>
            <button className="botonesCarrito" onClick={incrementar}>+</button>
        </div>
    )
}