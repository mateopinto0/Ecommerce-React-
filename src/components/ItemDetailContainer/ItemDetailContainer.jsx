import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";



export const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log("id recibidio" + id)
    const [itemDetail,setItemDetail] = useState(null);
    const [loading,setLoading] = useState(true);

   

    useEffect(()=>{
        const obtenerDetalle = async () =>{
            const ref= doc(db,"products",id)
            const snap= await getDoc(ref);

            if(snap.exists){
               
                setItemDetail({id: snap.id , ...snap.data()})
                
            }else{
                console.log("No existe el juego")
            }
             setLoading(false);
        }
        obtenerDetalle()
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
            <h1>Detalles del producto</h1>
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