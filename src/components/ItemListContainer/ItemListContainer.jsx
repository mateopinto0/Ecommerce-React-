import { Item } from "../Item/Item"
import './ItemListContainer.css'
import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"

export const ItemListContainer = () => {

    const[items,setItems]=useState([]);
    const[loading,setLoading]=useState(true);

        useEffect(() => {
            fetch("/data/items.json").
            then((res)=> res.json().
            then((data)=>setItems(data)).
            catch((err)=> console.log(err)).
            finally(()=>setLoading(false)));

        setTimeout(() => {
        setLoading(false);
        }, 1000);
        }, []);

    if(loading){
        return( 
        <Spinner></Spinner>
        )
    }

    return(
        
        <ItemList items={items}></ItemList>
    )
}