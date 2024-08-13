import bcrypt from 'bcrypt'

async function securePassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

function securePasswordSync(password: string) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

export { securePassword, securePasswordSync }
