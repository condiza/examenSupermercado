import { Router } from "express";
import { authValidate } from "../controller/auth/authUser";

const routes = Router();

routes.route('/')
    .post(authValidate)

export default routes;