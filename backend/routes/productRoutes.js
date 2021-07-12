import express from 'express';
import {getProducts, getProductBYId} from '../controllers/productController.js'

const router = express.Router();


router.route('/').get(getProducts)


router.route('/:id').get(getProductBYId)


export default router;