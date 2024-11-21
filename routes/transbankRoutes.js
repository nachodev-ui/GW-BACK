import express from 'express';
import { transbankPayment, confirmTransaction, getTransaction } from '../controllers/transbankController.js';

const transbankRouter  = express.Router();

transbankRouter.post('/create', transbankPayment);
transbankRouter.get('/get/:token', getTransaction);
transbankRouter.put('/confirm/:token', confirmTransaction);

export default transbankRouter;
