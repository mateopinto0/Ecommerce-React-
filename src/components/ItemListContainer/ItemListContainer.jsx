import { Item } from "../Item/Item"
import './ItemListContainer.css'
import gta from '../../assets/img/Gta.webp'
import gow from '../../assets/img/God of war.webp'
import re from '../../assets/img/Resident Evil.webp'
import { ItemList } from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { Spinner } from "../Spinner/Spinner"

export const ItemListContainer = () => {

    const productos = [
        {imagenUrl:gow,nombre:"God of war",precio:1200},
        {imagenUrl:gta,nombre:"Grand theft Auto",precio:2200},
        {imagenUrl:re,nombre:"Resident Evil",precio:2500}
    ];
    
    const[loading,setLoading]=useState(true);
        useEffect(() => {
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
        /*<>
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {productos.map((producto,index)=>(
            <TarjetaProducto key={index} {...producto}></TarjetaProducto>
        ))}
        </div>
        </>*/

        <ItemList productos={productos}></ItemList>
    )
}