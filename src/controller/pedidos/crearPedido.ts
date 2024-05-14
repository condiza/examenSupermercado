import { Response, Request } from "express";
import { validateToken } from "../../middleware/validateToken";
import { createP } from "../../repositorys/pedido/crearPedido";
import { pedido } from "../../interface/pedido.Interface";

export async function createPedido(req: Request, res: Response) {
    try {
        const { id_producto } = req.body;
        const token = req.get('Authorization');
        const userId = await validateToken(token);

        const newPedido: pedido = {
            id_Usuario: userId,
            id_producto, 
            estado: 'En proceso', 
        };

        await createP(newPedido);

        res.status(201).json({ message: 'Pedido creado satisfactoriamente' });
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
