import { useEffect, useState } from "react"
import { obtenerProductos, removeProduct } from "../../../service/ProductoService";
import { Spinner } from "../../Spinner/Spinner";
import { TablaItems } from "../TablaItems/TablaItems";

export const TablaItemsContainer = () => {
    const[items,setItems] = useState([]);
    const[loading,setLoading]=useState(true);
    const [busqueda,setBusqueda] = useState("");
    
    
    useEffect(()=>{
            
        obtenerProductos().then((lista) => {setItems(lista); setLoading(false)})
                
    },[])

    const itemsFiltrados = items.filter(item => item.nombre.toLowerCase().includes(busqueda.toLowerCase()))

    const handleRemoveItem = async(id) => {
        const confirmar=window.confirm("¿Estás seguro que quieres eliminar el producto?")
        if(!confirmar) return;
        await removeProduct(id);
        setItems((prev)=>prev.filter((item)=>item.id != id))
    }

    if(loading){
            return( 
            <Spinner></Spinner>
            )
        }

    return(
        <TablaItems items={itemsFiltrados} handleRemoveItem={handleRemoveItem}
        busqueda={busqueda} setBusqueda={setBusqueda}></TablaItems>
    )    
}