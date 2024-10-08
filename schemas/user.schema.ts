import joi from 'joi'

export const userSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role_id: joi.number().valid(3, 4),
})
