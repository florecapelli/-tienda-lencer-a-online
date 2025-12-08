import express from "express";
import cors from "cors";
import authRoutes from "./src/routes/auth.routes.js";
import productRoutes from "./src/routes/products.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// CORS
app.use(cors({
  origin: ['http://localhost:3000', 'https://perfumes2025.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logs: aquí es donde va tu console.log
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`, req.body);
  next();
});

// Rutas
app.use("/auth", authRoutes);
app.use("/products", productRoutes);

// Rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
