import { Item } from "../Item/Item"

export const ItemList = ({items}) => {

    return(
        <>
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {items.map((item)=>(
            <Item key={item.id} {...item}></Item>
        ))}
        </div>
        </>
    )


}