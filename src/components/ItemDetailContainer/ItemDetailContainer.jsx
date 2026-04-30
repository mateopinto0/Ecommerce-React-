import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";


export const ItemDetailContainer = () => {
    const {id} = useParams();

    const [itemDetail,setItemDetail] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch("/data/items.json").
        then((res) => res.json()).
        then(data => {
            const item = data.find((element) => String(element.id) === id);
            if(item){
                setItemDetail(item);
                return;
            }
        }).catch( err => console.log(err)).finally(() => setLoading(false)) 
    }, []
    )

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
        <section className="item-container">
        <div>
            <h1>Detalles del producto</h1>
            <ItemDetail item={itemDetail}></ItemDetail>
        </div>
        </section>
    )

}