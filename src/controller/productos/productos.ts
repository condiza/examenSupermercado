import { Response,Request } from "express";
import { Gets } from "../../repositorys/productos/productos";
import { Existences } from "../../helpers/validateStaock/validateStock";

export async function getProductos(req:Request, res:Response): Promise <Response> {
    try {
        const Productos = await Gets();
        await Existences(Productos);
       return res.status(200).json(Productos);
    } catch (error:any) {
        return res.status(500).json({
            error:error.message
        });
    }
};