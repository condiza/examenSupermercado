import { connect } from "../../config/dbConfig";
import { pedido } from "../../interface/pedido.Interface";

export async function createP(newPedido:pedido) {
    const conn = await connect();
    await conn.query('INSERT INTO Pedido SET ? ',[newPedido]);
}