import { Router } from "express";
import { createPedido } from "../controller/pedidos/crearPedido";

const routes = Router();

routes.route('/')
    .post(createPedido)

export default routes;