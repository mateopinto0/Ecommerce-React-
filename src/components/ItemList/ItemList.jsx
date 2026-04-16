import { TarjetaProducto } from "../TarjetaProducto/TarjetaProducto"

export const ItemList = ({productos}) => {

    return(
        <>
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {productos.map((producto,index)=>(
            <TarjetaProducto key={index} {...producto}></TarjetaProducto>
        ))}
        </div>
        </>
    )


}