import express from "express";
import { login } from "../controllers/auth.controller.js";

const routes = express.Router();

// Ruta de login con validación básica de datos
routes.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Faltan credenciales: email y password son requeridos" });
  }
  next();
}, login);

export default routes;
