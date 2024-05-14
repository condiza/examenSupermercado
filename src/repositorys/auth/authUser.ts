import { connect } from "../../config/dbConfig";
import { authUSer } from "../../interface/auth.Interface";

export async function Auth(email_U:authUSer) {
    try {
        const conn = await connect();
        const result = await conn.query('SELECT contraseña FROM Usuarios WHERE correo = ?',[email_U]);
        return result;
    } catch (error) {
        throw new Error('Incorrect username or password');
    }
}