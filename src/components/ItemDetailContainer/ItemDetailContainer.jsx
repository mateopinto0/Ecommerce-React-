import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { obtenerProductoPorId } from "../../service/ProductoService";



export const ItemDetailContainer = () => {
    const {id} = useParams();
    const [itemDetail,setItemDetail] = useState(null);
    const [loading,setLoading] = useState(true);

   

    useEffect(()=>{
        obtenerProductoPorId(id).then((producto)=>{
            setItemDetail(producto);
            setLoading(false);
        })
    },[id])

    if(loading){
        return(
            <>
            <Spinner></Spinner>
            </>
        )
    }
    if(!itemDetail){
        return (<p>Producto no encontrado...</p>)
    }

    return(
        
        <div className="item-container">
            <h2>Detalles del producto</h2>
            <ItemDetail 
            id={itemDetail.id}
                imagenUrl={itemDetail.imagenUrl}
                nombre={itemDetail.nombre}
                precio={itemDetail.precio}
                descripcion={itemDetail.descripcion}>
                    
            </ItemDetail>
        </div>
        
    )

}