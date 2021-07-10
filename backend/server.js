import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connDB from './config/Db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const app = express()
connDB()

app.get('/' ,(req, res)=>{
    res.send('API is running')
})

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = 6000 || process.env.port
app.listen(process.env.PORT, console.log(`Server running in port ${PORT} in mode ${process.env.NODE_ENV}`.yellow.bold))