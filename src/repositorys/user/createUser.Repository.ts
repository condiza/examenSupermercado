import { connect } from "../../config/dbConfig";
import { user } from "../../interface/use.Interface";

export async function Create(newUser:user) {
    const conn = await connect();
    await conn.query('INSERT INTO Usuarios SET ?',[newUser]);
}
