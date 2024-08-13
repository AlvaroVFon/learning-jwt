import Joi from 'joi'

const updateUserSchema = Joi.object({
    name: Joi.string().min(3),
    email: Joi.string().email(),
    role_id: Joi.number(),
})

export { updateUserSchema }
