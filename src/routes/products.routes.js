import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById
} from "../controllers/products.controller.js";
import { authentication } from "../middleware/authentication.js";

const routes = express.Router();

// Obtener todos los productos
routes.get("/", getAllProducts);

// Obtener producto por ID
routes.get("/:id", getProductById);

// Crear nuevo producto (protegido)
routes.post("/", authentication, (req, res, next) => {
  const { name, price, stock, category } = req.body;
  if (!name || !price || !stock) {
    return res.status(400).json({ error: "Faltan datos obligatorios del producto" });
  }
  next();
}, addProduct);

// Eliminar producto por ID (protegido)
routes.delete("/:id", authentication, deleteProduct);

export default routes;


