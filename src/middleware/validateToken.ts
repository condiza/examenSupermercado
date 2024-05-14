import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function validateToken(token: any): Promise<number> {
    let TOKEN = '';
    if (token) {
        TOKEN = token.split(' ')[1];
    }
    if (!TOKEN) {
        throw new Error('Access denied');
    }
    try {
        const decoded = jwt.verify(TOKEN, process.env.SECRET as string) as JwtPayload;
        return decoded.id; 
    } catch (err) {
        throw new Error('Access denied, token expired or incorrect');
    }
}
