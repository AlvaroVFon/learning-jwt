import { Request, Response, NextFunction } from 'express'

async function checkAuthHeader(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const token = req.headers.authorization?.split(' ')[1]
    const bearer = req.headers.authorization?.split(' ')[0]

    if (!token || bearer !== 'Bearer') {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    next()
}

export { checkAuthHeader }
