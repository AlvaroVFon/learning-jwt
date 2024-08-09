import Server from './models/Server'

async function main() {
    const server = new Server()
    server.start(3000)
}

main()
