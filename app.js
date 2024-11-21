import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { configDotenv } from 'dotenv';

import khipuRouter from './routes/paymentRoutes.js';
import transbankRouter from './routes/transbankRoutes.js';

const app = express();

// Configuración de variables de entorno
configDotenv();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/api', khipuRouter);
app.use('/api/transbank', transbankRouter);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

export default app
