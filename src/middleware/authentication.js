import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY || "1twp1969vwetv0622cpa";

export const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ error: "Token no proporcionado" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Token inválido" });

    jwt.verify(token, secret_key, (err, decoded) => {
      if (err) return res.status(403).json({ error: "Token inválido o expirado" });
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error("Error en autenticación:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
