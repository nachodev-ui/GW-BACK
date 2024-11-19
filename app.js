import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import router from './routes/paymentRoutes.js';

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Rutas
app.use('/api', router);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(err.status || 500).json({ error: err.message });
});

export default app
