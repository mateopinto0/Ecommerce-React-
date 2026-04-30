import { BotonCarrito } from "../BotonCarrito/BotonCarrito"
import { Item } from "../Item/Item"

export const ItemDetail = ({item}) => {
    return(
        <Item {...item}>
            <BotonCarrito></BotonCarrito>
        </Item>
    )
}