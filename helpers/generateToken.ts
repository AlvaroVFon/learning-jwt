import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

async function generateToken(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: '3h',
    })
}

export { generateToken }
