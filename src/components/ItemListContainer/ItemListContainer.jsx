import { Item } from "../Item/Item"
import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemListContainer = () => {

    const[items,setItems]=useState([]);
    const[loading,setLoading]=useState(true);


        useEffect(()=>{
            const obtenerJuegos = async () => {
                const snapshot = await getDocs(collection(db,"products"));
                const lista = snapshot.docs.map(doc => ({
                    id : doc.id,
                    ...doc.data()
                }));
                
                setItems(lista);
                setLoading(false);
            }
            obtenerJuegos();
            
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