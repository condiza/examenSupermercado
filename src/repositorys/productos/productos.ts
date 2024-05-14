import { connect } from "../../config/dbConfig";

export async function Gets() {
    try {
    const conn = await connect();
    const result =  await conn.query('SELECT * FROM Productos');
    return result[0]
    } catch (error) {
        console.error('Error finding Productos',error)
    }
}