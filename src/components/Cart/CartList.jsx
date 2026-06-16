import { Item } from "../Item/Item";
import { BotonCarrito } from "../BotonCarrito/BotonCarrito";

export const CartList = ({ cart, onRemoveItem, onQuantityChange }) => {
    if (cart.length === 0) return <p>El carrito está vacío.</p>;

    return (
        <div className="carrito-items">
            {cart.map((item) => (
                <Item key={item.id} {...item}>
                    <BotonCarrito
                        precio={item.precio}
                        cantidad={item.cantidad}
                        onQuantityChange={(qty) => onQuantityChange(item.id, qty)}
                    />
                    <button className="button-cart-red" onClick={() => onRemoveItem(item.id)}>
                        Eliminar del carrito
                    </button>
                </Item>
            ))}
        </div>
    );
};