import { createPayment } from '../services/khipuService.js';

export const createOrder = async (req, res, next) => {
  try {
    const { amount, currency, subject } = req.body;

    const paymentResponse = await createPayment({ amount, currency, subject });

    res.status(201).json({
      message: 'Pago creado exitosamente',
      payment: paymentResponse,
    });
  } catch (error) {
    next(error); // Manejo de errores globales
  }
};
