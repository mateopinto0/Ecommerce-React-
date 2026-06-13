import { Link } from "react-router-dom"

export const FormEditarItem = ({product,errores,loading,handleChange,handleFileChange,handleSubmit}) =>{
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Editar Juego</h2>

                <div className="input">
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre} onChange={handleChange} ></input>
                {errores.nombre && <p>{errores.nombre}</p>}
                </div>
                <div className="input">
                <label>Descripcion:</label>
                <input type="text" name="descripcion" value={product.descripcion} onChange={handleChange} ></input>
                {errores.descripcion && <p>{errores.descripcion}</p>}
                </div>
                <div className="input">
                <label>Precio:</label>
                <input type="number" name="precio" value={product.precio} onChange={handleChange} ></input>
                {errores.precio && <p>{errores.precio}</p>}
                </div>
                <div className="input">
                <label>Cantidad:</label>
                <input type="number" name="cantidad" value={product.cantidad} onChange={handleChange}></input>
                {errores.cantidad && <p>{errores.cantidad}</p>}
                </div>

                <div className="input">
                    <label>Imagen:</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} ></input>
                    {errores.imagenUrl && <p>{errores.imagenUrl}</p>}
                </div>

                <Link to={"/admin/dashboard"} className="button">Cancelar</Link>
                <button type="submit" className="button btn-agregar">Guardar cambios</button>

                {errores.general && <p>{errores.general}</p>}
            </form>
        </div>
    )
}