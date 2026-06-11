import { Item } from "../Item/Item"
import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import { obtenerProductos } from "../../service/ProductoService"

export const ItemListContainer = () => {

    const[items,setItems]=useState([]);
    const[loading,setLoading]=useState(true);


        useEffect(()=>{
        
            obtenerProductos().then((lista)=>{setItems(lista); setLoading(false);})
            
        },[])

    if(loading){
        return( 
        <Spinner></Spinner>
        )
    }

    return(
        
        <ItemList items={items}></ItemList>
    )
}