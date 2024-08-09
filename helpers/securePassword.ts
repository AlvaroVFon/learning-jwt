import bcrypt from 'bcrypt'

async function securePassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export { securePassword }
