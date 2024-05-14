import { Response, Request } from "express";
import bcrypt from 'bcrypt';
import { Id } from "../../repositorys/auth/validateId";
import { createToken } from "../../helpers/generateToken/generateToken";
import { Auth } from "../../repositorys/auth/authUser";

export async function authValidate(req: Request, res: Response){
    try {
        const { correo, contraseña } = req.body;

        const result: any = await Auth(correo);

        if (result[0].length > 0) {
            
            const isPasswordValid = await bcrypt.compare(contraseña, result[0][0].contraseña);
            
            if(isPasswordValid){
                const id:any = await Id(correo)
                const token = await createToken(id[0]);
            
                console.log(id[0].Id_User)
                return res.status(200).json({ message: 'Successful authentication',
                token: token
                 });
            }else {
                return res.status(401).json({ error: 'Incorrect username or password' });
            }
        }
    } catch (error) {
        
            return res.status(500).json({ error: 'Internal Server Error' });
    }
}
