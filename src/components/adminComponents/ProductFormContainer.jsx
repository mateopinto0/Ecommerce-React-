import { useState } from "react";
import { replace, useNavigate } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI";
import { validateForm } from "../../utils/validateForm";
import { uploadImage } from "../../service/uploadImage";
import { addProduct } from "../../service/ProductoService";

export const ProductFormContainer = () =>{
    const navigate = useNavigate();
    const [loading,setLoading] = useState(true);
    const [errores,setErrores] = useState({});
    const [file,setFile] = useState(null);
    const [product,setProduct] = useState({
        nombre: "",
        precio: "",
        cantidad: "",
        descripcion: ""
    });

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
        const newErrores = validateForm({...product,file});

        if(Object.keys(newErrores).length > 0){
            setErrores(newErrores);
            setLoading(false);
            return
        }

        //subir imagen
        try{
            const imagenUrl = await uploadImage(file);
            const productData= {
                ...product,
                precio: Number(product.precio),
                cantidad: Number(product.cantidad),
                imagenUrl: imagenUrl
            };
            console.log("productData final:", productData);
            const id = await addProduct(productData);

            setProduct({nombre:"",precio:"",cantidad:"",descripcion:""})
            setFile(null)
            navigate(`/success/${id}`, {replace: true})
        } catch(error){
            console.log("Error: " + error);
            setErrores({general: error.message})
        } finally {
            setLoading(false)
        }

        
    }

    return(
        <ProductFormUI product={product}
        errores={errores} 
        loading={loading}
        onChange={handleChange}
        onFileChange={handleFileChange}
        onSubmit={handleSubmit}
        ></ProductFormUI>
    )
}