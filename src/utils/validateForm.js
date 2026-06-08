export const validateForm = (product) =>{

    const errors = {};

    if(!product.nombre.trim()){
        errors.nombre="El Nombre es obligatorio";
    }
    if(product.precio <= 0){
        errors.precio="El precio debe ser mayor a 0";
    }
    if(product.cantidad <= 0){
        errors.cantidad="La cantidad debe ser mayor a 0";
    }
    if(!product.descripcion.trim()){
        errors.descripcion="La descripcion es obligatoria";
    }
    if(product.imagenUrl){
        errors.imagenUrl = "Debe seleccionar una imagen";
    }
    return errors;
}