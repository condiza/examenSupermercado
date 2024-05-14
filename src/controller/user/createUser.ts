import { Request,Response } from "express";
import bcrypt from 'bcrypt'
import { ValidateEmail } from "../../repositorys/user/validateEmail";
import { user } from "../../interface/use.Interface";
import { Create } from "../../repositorys/user/createUser.Repository";


export async function createUser(req: Request, res: Response) {
   try {
    const { nombre, correo, contraseña } = req.body;

    //validar si el usuario existe 
    const existingUser = await ValidateEmail(correo);
    if (existingUser) {
        return res.status(400).json({
            error: 'User already exists'
        });
    }
    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const newUser: user = {
        nombre,
        correo, 
        contraseña:hashedPassword,
    };
    await Create(newUser);
    return res.status(200).json({
        menssage: 'Successfully created user',
    });
   } catch (error) {
    return res.status(500).json({
        error:'Server internal error'
    })
   }
};
