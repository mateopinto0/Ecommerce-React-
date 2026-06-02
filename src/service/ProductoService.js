import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

export const obtenerProductos = async () => {

    try{
    const snapshot = await getDocs(collection(db,"products"));

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