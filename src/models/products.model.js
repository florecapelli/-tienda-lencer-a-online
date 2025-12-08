import { db } from "../data/data.js";
import { collection, getDocs, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";

// Obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productos = [];
    querySnapshot.forEach((docItem) => {
      productos.push({ ...docItem.data(), id: docItem.id });
    });
    return productos;
  } catch (error) {
    console.error("Error obteniendo productos:", error);
    throw new Error("No se pudieron obtener los productos");
  }
};

// Obtener producto por ID
export const obtenerProducto = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return null;
    }

    return { ...docSnap.data(), id: docSnap.id };
  } catch (error) {
    console.error("Error obteniendo producto:", error);
    throw new Error("No se pudo obtener el producto");
  }
};

// Agregar nuevo producto
export const agregarProducto = async (producto) => {
  try {
    const docRef = await addDoc(collection(db, "products"), producto);
    return { ...producto, id: docRef.id };
  } catch (error) {
    console.error("Error agregando producto:", error);
    throw new Error("No se pudo agregar el producto");
  }
};

// Eliminar producto por ID
export const eliminarProducto = async (id) => {
  try {
    await deleteDoc(doc(db, "products", id));
  } catch (error) {
    console.error("Error eliminando producto:", error);
    throw new Error("No se pudo eliminar el producto");
  }
};
