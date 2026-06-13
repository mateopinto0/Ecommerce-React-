import { Link } from "react-router-dom"
import "./TablaItems.css"

export const TablaItems = ({items, handleRemoveItem,setBusqueda,busqueda}) => {

    

    return(
        <div className="table-container">
             <div className="container-buscador">
             <input className="buscador" type="text" placeholder="Buscar por nombre..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
            </div>
        <div id="tabla">    
       <table className="tabla-wrapper">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
            </tr>
        </thead>    
        <tbody>
            {items.map((item)=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td className="fila-botones">
                        
                        <Link to={"/admin/detalle-item/"+item.id} className="btn-detalle">Ver detalle</Link>
                        <button className="btn-eliminar" onClick={()=>handleRemoveItem(item.id)}>Eliminar</button></td>
                </tr>
            ))}
         </tbody>   
        </table>
        </div>
        </div> 
    )
}