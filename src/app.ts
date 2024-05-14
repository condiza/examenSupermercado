import express from "express";
import bodyParser from 'body-parser';


import register from './routes/user.routes'

import auth from './routes/auth.routes'

import getP from './routes/product.routes'

import createPedidos from './routes/pedidos.routes'

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/user',register)
app.use('/auth',auth)
app.use('/productos',getP)
app.use('/pedidos',createPedidos)


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
