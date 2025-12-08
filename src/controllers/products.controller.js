import * as productService from "../services/products.services.js";


export const getAllProducts = async (req, res) => {
  try {
    console.log("Obteniendo todos los productos...");
    const products = await productService.getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getAllProducts:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID de producto requerido" });

    const product = await productService.getProductByIdService(id);
    if (!product) return res.status(404).json({ error: "Producto no encontrado" });

    res.status(200).json(product);
  } catch (error) {
    console.error("Error getProductById:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    if (!product.name || !product.price || !product.stock || !product.description) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const newProduct = await productService.addProductService(product);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error addProduct:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID de producto requerido" });

    await productService.deleteProductService(id);
    res.status(200).json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error deleteProduct:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
