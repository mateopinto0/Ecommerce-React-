export const CartSummary = ({ totalPrice, onClearCart, onCheckout }) => {
    return (
        <div className="carrito-summary">
            <h3>Precio total: {totalPrice} ARS</h3>
            <button className="button" onClick={onClearCart}>
                Vaciar Carrito
            </button>
            <button className="button" onClick={onCheckout}>
                Finalizar Compra
            </button>
        </div>
    );
};