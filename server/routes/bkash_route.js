import express from 'express';
import { bkash_auth } from '../middlewares/bkash_middleware.js';
import { call_back, payment_create, refund } from '../controllers/payment_controller.js';


const router = express.Router();

router
  .route('/bkash/payment/create')
  .post(bkash_auth, payment_create);

router
  .route('/bkash/payment/callback')
  .get(bkash_auth, call_back); // removed duplicate route

router
  .route('/bkash/payment/refund/:trxID')
  .get(bkash_auth, refund);

export default router;
