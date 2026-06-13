import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import "./ItemList.css"

export const ItemList = ({items}) => {

    return(
        <div className="container-itemlist">
        <h2>Lista de Juegos</h2>
        <div className="cards-container">
        {items.map((item)=>(
            <Item key={item.id} {...item}>
                <Link className="button" to={"/items/" + item.id}>Ver mas</Link>
            </Item>
        ))}
        </div>
        </div>
    )


}