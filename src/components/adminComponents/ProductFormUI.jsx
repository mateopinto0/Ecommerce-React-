export const ProductFormUI = ({product,errores,loading,onChange,onFileChange,onSubmit}) =>{

    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2>Añadir Juego</h2>

                <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre} onChange={onChange} required></input>
                {errores.nombre && <p>{errores.nombre}</p>}
                </div>
                <div>
                <label>Descripcion:</label>
                <input type="text" name="descripcion" value={product.descripcion} onChange={onChange} required></input>
                {errores.descripcion && <p>{errores.descripcion}</p>}
                </div>
                <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={product.precio} onChange={onChange} required></input>
                {errores.precio && <p>{errores.precio}</p>}
                </div>
                <div>
                <label>Cantidad:</label>
                <input type="number" name="cantidad" value={product.cantidad} onChange={onChange} required></input>
                {errores.cantidad && <p>{errores.cantidad}</p>}
                </div>

                <div>
                    <label>Imagen:</label>
                    <input type="file" accept="image/*" onChange={onFileChange} required></input>
                    {errores.imagenUrl && <p>{errores.imagenUrl}</p>}
                </div>
                <button type="submit">Añadir Juego</button>

                {errores.general && <p>{errores.general}</p>}
            </form>
        </div>
    )
}