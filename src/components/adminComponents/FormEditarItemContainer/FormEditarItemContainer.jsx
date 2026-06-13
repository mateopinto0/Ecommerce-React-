import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { validateForm } from "../../../utils/validateForm";
import { uploadImage } from "../../../service/uploadImage";
import { editarProducto, obtenerProductoPorId } from "../../../service/ProductoService";
import { Spinner } from "../../Spinner/Spinner";
import { FormEditarItem } from "../FormEditarItem/FormEditarItem";

export const FormEditarItemContainer = () => {
    const navigate = useNavigate();
     const { id } = useParams(); 
    const [loading,setLoading] = useState(true);
    const [errores,setErrores] = useState({});
    const [file,setFile] = useState(null);
    const [product,setProduct] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        descripcion: ""
    });

    useEffect(()=>{

        const cargarProducto = async() =>{
            try{
                const data = await obtenerProductoPorId(id);
                setProduct({
                    nombre: data.nombre,
                    precio: data.precio,
                    cantidad: data.cantidad,
                    descripcion: data.descripcion,
                    imagenUrl: data.imagenUrl
                })
            }catch (error) {
                setErrores({ general: "No se pudo cargar el producto" });
            } finally {
                setLoading(false); // 👈 recién acá termina de cargar
            }
        }; cargarProducto();
    },[id])

    const handleChange = (e) =>{
    
        const {name,value} = e.target;
        setProduct({...product,[name]:value})
    }

    const handleFileChange = (e)=>{
        const file = e.target.files[0] || null;
        setFile(file);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setErrores({});
        setLoading(true);

        //
        const newErrores = validateForm({...product,file},true);

        if(Object.keys(newErrores).length > 0){
            setErrores(newErrores);
            setLoading(false);
            return
        }

        
         try {
            // Si no cambió la imagen, no la subís de nuevo
            let imagenUrl = product.imagenUrl;
            if (file) {
                imagenUrl = await uploadImage(file);
            }

            const productData = {
                ...product,
                precio: Number(product.precio),
                cantidad: Number(product.cantidad),
                imagenUrl
            };

            await editarProducto(id, productData); // 👈 pasás el id

            navigate(`/admin/detalle-item/${id}`, { replace: true });
        } catch (error) {
            setErrores({ general: error.message });
        } finally {
            setLoading(false);
        }

        
    }

    if(loading){return(<Spinner></Spinner>)}

    return(<FormEditarItem
        product={product}
        errores={errores} 
        loading={loading}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSubmit={handleSubmit}
    ></FormEditarItem>)
}