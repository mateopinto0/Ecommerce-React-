import { Link, useNavigate } from "react-router-dom"
import "./Dashboard.css"
import { useAuth } from "../../../context/AuthContext"

export const Dashboard = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logout()
            navigate("/login")
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="dashboard">
        <header>
                <h2>Panel de administracion</h2>
            <div className="buttons-container">
                <Link  to="/" className="button-volver">Volver a la tienda</Link>
                <button className="button-logout" onClick={handleLogout}>Cerrar sesion</button>
            </div>
           
        </header>


    <section className="dashboard-actions">
        <h3>Acciones rapidas</h3>
        <div className="actions">
            <Link className="button" to="/admin/new/product">Cargar nuevo producto</Link>
            <Link className="button" to="#">Modificar</Link>
            <Link className="button" to="#">Eliminar</Link>
        </div>
        </section> 
        <section className="help">
            <h3>Ayuda</h3>
            <p>Desde el panel podes gestionar los productos de la tienda.</p>
        </section>    

        </div>
      
    )
}