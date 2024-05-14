import { connect } from "../../config/dbConfig";
import { authUSer } from "../../interface/auth.Interface";

export async function Id(email_U:authUSer) {
    const conn = await connect();
    const result = await conn.query('SELECT id_U FROM Usuarios WHERE correo = ?',[email_U]);
    return result[0];
}