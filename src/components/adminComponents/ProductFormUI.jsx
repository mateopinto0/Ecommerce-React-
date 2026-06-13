import { Link } from "react-router-dom"
import "./ProductForm.css"
export const ProductFormUI = ({product,errores,loading,onChange,onFileChange,onSubmit}) =>{

    return(
        <div className="container">
            <form onSubmit={onSubmit} className="form">
                <h2>Añadir Juego</h2>

                <div className="input">
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre} onChange={onChange} required></input>
                {errores.nombre && <p>{errores.nombre}</p>}
                </div>
                <div className="input">
                <label>Descripcion:</label>
                <input type="text" name="descripcion" value={product.descripcion} onChange={onChange} required></input>
                {errores.descripcion && <p>{errores.descripcion}</p>}
                </div>
                <div className="input">
                <label>Precio:</label>
                <input type="number" name="precio" value={product.precio} onChange={onChange} required></input>
                {errores.precio && <p>{errores.precio}</p>}
                </div>
                <div className="input">
                <label>Cantidad:</label>
                <input type="number" name="cantidad" value={product.cantidad} onChange={onChange} required></input>
                {errores.cantidad && <p>{errores.cantidad}</p>}
                </div>

                <div className="input">
                    <label>Imagen:</label>
                    <input type="file" accept="image/*" onChange={onFileChange} required></input>
                    {errores.imagenUrl && <p>{errores.imagenUrl}</p>}
                </div>

                <div className="container-buttons">
                <Link to={"/admin/dashboard"} className="button btn-agregar">Cancelar</Link>
                <button type="submit" className="button btn-agregar">Añadir Juego</button>
                </div>
                {errores.general && <p>{errores.general}</p>}
            </form>
        </div>
    )
}