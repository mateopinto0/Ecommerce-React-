import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {

    return(
        <>
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {productos.map((producto,index)=>(
            <Item key={index} {...producto}></Item>
        ))}
        </div>
        </>
    )


}