import { createPayment, getPayment, deletePayment, refundPayment } from '../services/khipuService.js';

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

export const getOrder = async (req, res, next) => {
  try {
    const { paymentId } = req.params;

    const paymentResponse = await getPayment(paymentId);

    res.status(200).json({
      message: 'Pago obtenido exitosamente',
      payment: paymentResponse,
    });
  } catch (error) {
    next(error); // Manejo de errores globales
  }
}

export const cancelOrder = async (req, res, next) => {
  try {
    const { paymentId } = req.params;

    await deletePayment(paymentId);

    res.status(204).json({
      message: 'Pago cancelado exitosamente',
    });
  } catch (error) {
    next(error); // Manejo de errores globales
  }
}

export const refundOrder = async (req, res, next) => {
  try {
    const { paymentId } = req.params;

    await refundPayment(paymentId);

    res.status(204).json({
      message: 'Pago reembolsado exitosamente',
    });
  } catch (error) {
    next(error); // Manejo de errores globales
  }
}

