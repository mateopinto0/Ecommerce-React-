import { TarjetaProducto } from "../TarjetaProducto/TarjetaProducto"
import './ContenedorTarjetas.css'
import gta from '../../assets/img/Gta.webp'
import gow from '../../assets/img/God of war.webp'
import re from '../../assets/img/Resident Evil.webp'
import { ItemList } from "../ItemList/ItemList"

export const ContenedorTarjetas = () => {

    const productos = [
        {imagenUrl:gow,nombre:"God of war",precio:1200},
        {imagenUrl:gta,nombre:"Grand theft Auto",precio:2200},
        {imagenUrl:re,nombre:"Resident Evil",precio:2500}
    ];
    

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