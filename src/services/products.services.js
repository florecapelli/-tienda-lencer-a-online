import { obtenerProductos, obtenerProducto, agregarProducto, eliminarProducto } from "../models/products.model.js";

// Servicio: obtener todos los productos
export const getAllProductsService = async () => {
  try {
    const productos = await obtenerProductos();
    return productos;
  } catch (error) {
    throw error;
  }
};

// Servicio: obtener producto por ID
export const getProductByIdService = async (id) => {
  try {
    const producto = await obtenerProducto(id);
    if (!producto) throw new Error("Producto no encontrado");
    return producto;
  } catch (error) {
    throw error;
  }
};

// Servicio: agregar nuevo producto
export const addProductService = async (producto) => {
  try {
    const newProduct = await agregarProducto(producto);
    return newProduct;
  } catch (error) {
    throw error;
  }
};

// Servicio: eliminar producto
export const deleteProductService = async (id) => {
  try {
    await eliminarProducto(id);
  } catch (error) {
    throw error;
  }
};
