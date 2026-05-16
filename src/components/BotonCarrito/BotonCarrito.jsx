import { useState } from "react"
import './BotonCarrito.css'

export const BotonCarrito = ({}) => {
    
    const[contador,setContador]= useState(0);
    
    const incrementar = () =>{
        setContador(contador + 1);
    }

    const decrementar = () =>{
        if(contador > 0){
            setContador(contador - 1);
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