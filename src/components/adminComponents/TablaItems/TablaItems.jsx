import { useState } from "react"
import { Link } from "react-router-dom"
import "./TablaItems.css"

const ITEMS_PER_PAGE = 5;

export const TablaItems = ({ items, handleRemoveItem, setBusqueda, busqueda }) => {

    const [currentPage, setCurrentPage] = useState(0);

    const handleBusqueda = (e) => {
        setBusqueda(e.target.value);
        setCurrentPage(0);
    }

    const offset = currentPage * ITEMS_PER_PAGE;
    const currentData = items.slice(offset, offset + ITEMS_PER_PAGE);
    const pageCount = Math.ceil(items.length / ITEMS_PER_PAGE);

    return (
        <div className="table-container">
            <div className="container-buscador">
                <input
                    className="buscador"
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={busqueda}
                    onChange={handleBusqueda}
                />
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
                        {currentData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td className="fila-botones">
                                    <Link to={"/admin/detalle-item/" + item.id} className="btn-detalle">Ver detalle</Link>
                                    <button className="btn-eliminar" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

           
            <div className="pagination">
                <button
                    className="page-link"
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={currentPage === 0}
                >
                    ← 
                </button>

                {Array.from({ length: pageCount }, (_, i) => (
                    <button
                        key={i}
                        className={`page-link ${currentPage === i ? "active" : ""}`}
                        onClick={() => setCurrentPage(i)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    className="page-link"
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === pageCount - 1}
                >
                     →
                </button>
            </div>
        </div>
    )
}