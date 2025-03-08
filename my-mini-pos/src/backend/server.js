import express, { json } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(json()); // Para leer datos en formato JSON
app.use(cors()); // Para permitir conexiones desde el frontend

// Base de datos de usuarios (simulada)
const usuarios = [
  { usuario: "admin", contraseña: "123456" },
  { usuario: "prueba", contraseña: "abcdef" }
];

// Ruta de login
app.post('/login', (req, res) => {
  const { usuario, contraseña } = req.body;

  const user = usuarios.find(u => u.usuario === usuario && u.contraseña === contraseña);

  if (user) {
    res.status(200).json({ mensaje: "Login exitoso" });
  } else {
    res.status(401).json({ mensaje: "Usuario o contraseña incorrectos" });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
