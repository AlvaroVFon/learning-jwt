import express, { Express } from 'express'
import { router } from '../routes/index'
class Server {
    private app: Express

    constructor() {
        this.app = express()
        this.middlewares()
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    }
    middlewares(): void {
        this.app.use(express.json())
        this.app.use(router)
    }
}
export default Server
