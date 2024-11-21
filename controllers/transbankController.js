import { tbkTransaction, confirmTransactionService, getTbkTransaction } from '../services/transbankService.js';

export const transbankPayment = async (req, res, next) => {
  try {
    const { buyOrder, sessionId, amount, returnUrl } = req.body;

    // Llama al servicio para crear la transacción
    const transaction = await tbkTransaction({ buyOrder, sessionId, amount, returnUrl });

    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

export const getTransaction = async (req, res, next) => {
  try {
    const { token } = req.params;

    // Llama al servicio
    const response = await getTbkTransaction(token);

    res.status(200).json(response);
  }
  catch (error) {
    next(error);
  }
}

export const confirmTransaction = async (req, res, next) => {
  try {
    const { token } = req.params;

    // Llama al servicio
    const response = await confirmTransactionService(token);

    res.status(200).json(response);
  }
  catch (error) {
    next(error);
  }
}
