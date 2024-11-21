import express from 'express';
import { createOrder, getOrder, cancelOrder, refundOrder } from '../controllers/paymentController.js';

const khipuRouter = express.Router();

khipuRouter.post('/create', createOrder);  // POST /payments/create
khipuRouter.get('/:paymentId', getOrder);  // GET /payments/:paymentId
khipuRouter.delete('/:paymentId', cancelOrder);  // DELETE /payments/:paymentId
khipuRouter.post('/:paymentId/refund', refundOrder);  // POST /payments/:paymentId/refund

export default khipuRouter;
    