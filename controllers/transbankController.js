import { tbkTransaction, confirmTransactionService, getTbkTransaction } from '../services/transbankService.js';

export const transbankPayment = async (req, res, next) => {
  try {
    const { buyOrder, sessionId, amount, returnUrl } = req.body;

    const transaction = await tbkTransaction({ buyOrder, sessionId, amount, returnUrl });

    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

export const getTransaction = async (req, res, next) => {
  try {
    const { token } = req.params;

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

export const handleReturnUrl = async (req, res) => {
  const { token_ws } = req.query;

  if (!token_ws) {
    return res.status(400).json({ success: false, message: 'Token_ws no proporcionado.' });
  }

  try {
    const response = await confirmTransactionService(token_ws);

      if (response.status === 'AUTHORIZED') {
        return res.redirect(`exp://192.168.1.16:8081/--/finished?token_ws=${token_ws}`);
      } else {
      return res.status(400).json({ success: false, message: 'Transacción no autorizada.', data: response });
    }
  } catch (error) {
    console.error('Error en returnUrl:', error.message);
    return res.status(500).json({ success: false, message: 'Error procesando la transacción.' });
  }
};

