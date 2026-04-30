import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({items}) => {

    return(
        <>
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {items.map((item)=>(
            <Item key={item.id} {...item}>
                <button className="button"><Link to={"/items/" + item.id}>Ver mas</Link></button>
            </Item>
        ))}
        </div>
        </>
    )


}