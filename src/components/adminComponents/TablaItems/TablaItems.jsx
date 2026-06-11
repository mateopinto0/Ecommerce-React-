import "./TablaItems.css"

export const TablaItems = ({items, handleRemoveItem}) => {

    return(
        <div className="table-container">
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
                    <td><button className="btn-eliminar" onClick={()=>handleRemoveItem(item.id)}>Eliminar</button></td>
                </tr>
            ))}
         </tbody>   
        </table>
        </div> 
    )
}