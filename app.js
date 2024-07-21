const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const houseRoutes = require('./routes/houseRoutes');
const dotenv = require('dotenv');

// Configuración inicial de dotenv para cargar variables de entorno
dotenv.config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware para parsear el cuerpo de las peticiones
app.use(bodyParser.json());

// Definición de rutas
app.use('/users', userRoutes);
app.use('/users', houseRoutes);

// Obtener el puerto desde las variables de entorno o usar 5000 por defecto
const port = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
