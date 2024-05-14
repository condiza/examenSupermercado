import { connect } from "../../config/dbConfig";
import { user } from "../../interface/use.Interface";

export async function ValidateEmail(email_U: string){
  try {
    const conn = await connect();
    const [user] = await conn.query('SELECT * FROM Usuarios WHERE correo = ?', [email_U]);

    const userAsArray = user as user[];

    if (userAsArray && userAsArray.length > 0) {
      return userAsArray[0]; 
    }
    return null; 
  } catch (error) {
    console.error('Error while validating email:', error);
    throw error;
  }
}
