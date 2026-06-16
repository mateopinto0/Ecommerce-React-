import { Link, replace, useNavigate } from "react-router-dom"
import "./Dashboard.css"
import { useAuth } from "../../../context/AuthContext"
import { TablaItemsContainer } from "../TablaItemsContainer/TablaItemsContainer";
import { useEffect } from "react";

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

    const handleLogoutTienda = async () => {
        try{
            const confirmar = window.confirm("Al volver a la tienda se cerrara la sesión y debera iniciar sesión de nuevo ¿Desea volver a la tienda?");
            if(!confirmar) return;
            navigate("/",{replace:true})
            await logout()
            
            
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        
        window.history.pushState(null, "", window.location.href);

        const handlePopState = async () => {
            try {
                 navigate("/", { replace: true });
                await logout();
               
            } catch (error) {
                console.log(error);
            }
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [logout, navigate]);


    return(
        <div className="dashboard">
        <header>
                <h2>Panel de administracion</h2>
            <div className="buttons-container">
                <button className="btn-volver" onClick={handleLogoutTienda}>Volver a la tienda</button>
                <button className="button-logout" onClick={handleLogout}>Cerrar sesion</button>
            </div>
           
        </header>


    <section className="dashboard-actions">
        <div className="actions">
            <Link className="button" to="/admin/new/product">+ Cargar nuevo producto</Link>          
        </div>
        </section> 

        <TablaItemsContainer></TablaItemsContainer>

        <section className="help">
            <h3>Ayuda</h3>
            <p>Desde el panel podes gestionar los productos de la tienda.</p>
        </section>    

        </div>
      
    )
}