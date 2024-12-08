import express from 'express';
import { transbankPayment, confirmTransaction, getTransaction, handleReturnUrl, refundPayment } from '../controllers/transbankController.js';

const transbankRouter  = express.Router();

transbankRouter.post('/create', transbankPayment);
transbankRouter.get('/get/:token', getTransaction);
transbankRouter.put('/confirm/:token', confirmTransaction);

// Ruta para el returnUrl
transbankRouter.get('/finished', handleReturnUrl);

transbankRouter.post('/refund/:token', refundPayment);

export default transbankRouter;
