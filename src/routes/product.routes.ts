import { Router } from "express";
import { getProductos } from "../controller/productos/productos";

const routes = Router();

routes.route('/')
    .get(getProductos)

export default routes;