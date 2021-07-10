import express from 'express';
import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'
const router = express.Router();

//@desc     Fetch all Products
//@route    GET api/products
//@access   Public
router.get('/', asyncHandler(async(req, res)=>{
    const products = await Product.find({})
    if(products){
        res.json(products)
    } else{
        res.status(404).json({
            message: "Not found"
        })
    }
}))

//@desc     Fetch all Product
//@route    GET api/products
//@access   Public
router.get('/:id', asyncHandler(async(req, res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    } else{
        res.status(404)
        throw new Error('Product not found')
    }
}))


export default router;