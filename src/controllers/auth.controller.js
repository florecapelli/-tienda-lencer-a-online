import { generateToken } from "../data/token.js";

export const login = async (req, res) => {
  console.log("Body recibido:", req.body);
  const { email, password } = req.body;

  if (email === "test@gmail.com" && password === "123456") {
    const token = generateToken({ id: "123", email });
    res.json({ token });
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};

