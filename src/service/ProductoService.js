import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"
import { db } from "../firebase/config"



export const obtenerProductos = async () => {

    try{
        const productsRef= collection(db,"products");
    const snapshot = await getDocs(productsRef);

    const lista= snapshot.docs.map(doc=>({
        id: doc.id,
        ...doc.data()
    }));
    return lista;
}catch(error){
    console.error("Error al obtener los productos:", error);
    return [];
}
    
}

export const obtenerProductoPorId = async (id) => {

    try{
        const ref = doc(db,"products",id);
        const snap = await getDoc(ref);

        if(snap.exists()){
            return {id: snap.id, ...snap.data()};
        }else{
            console.log("No existe el producto");
            return null;
        }
    }catch(error){
        console.error("Error al obtener el producto:", error);
        return null;
    }
}

export const addProduct = async(productData) => {
     try {
       
        const productsRef = collection(db, "products");
       
        const docRef = await addDoc(productsRef,productData)
        
        return docRef.id;
    } catch(error) {
        console.error("Error completo:", error);
        console.error("Stack:", error.stack);
        throw err;
    }
}

export const removeProduct = async(id) => {
    try{
        const ref= doc(db,"products",id);
        await deleteDoc(ref);
        console.log("Producto eliminado");
    }catch(err){
        console.log(err)
    }
}

export const editarProducto = async(id,nuevosDatos)=>{
    try{
         const datosFiltrados = Object.fromEntries(
            Object.entries(nuevosDatos).filter(([_, v]) => v !== undefined)
        );
        const ref= doc(db,"products",id);
        await updateDoc(ref,nuevosDatos);
        console.log("Producto editado correctamente")
    }catch(err){
        throw err;
    }
}