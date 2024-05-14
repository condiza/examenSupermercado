import { Router } from "express";
import { createUser } from "../controller/user/createUser";

const routes = Router();

routes.route('/')
    .post(createUser)


export default routes;