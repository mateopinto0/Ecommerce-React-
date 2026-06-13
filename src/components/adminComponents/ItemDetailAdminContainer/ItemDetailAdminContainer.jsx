import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { obtenerProductoPorId } from "../../../service/ProductoService";
import { Spinner } from "../../Spinner/Spinner";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { ItemDetailAdmin } from "../ItemDetailAdmin/ItemDetailAdmin";

export const ItemDetailAdminContainer = () => {
    const {id} = useParams();
    const [ itemDetail, setItemDetail] = useState(null)
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
            <ItemDetailAdmin
                id={itemDetail.id}
                imagenUrl={itemDetail.imagenUrl}
                nombre={itemDetail.nombre}
                precio={itemDetail.precio}
                descripcion={itemDetail.descripcion}
            ></ItemDetailAdmin>
        )
}