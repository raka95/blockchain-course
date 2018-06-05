const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.P2P_PORT ? process.env.P2P_PORT.split(',') : [];

class P2pServer {
    constrictor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    listen() {
        const server = new Websocket.server({ port: P2P_PORT });
        server.on('connection',socket => this.connectSocket(socket));
        console.log(`Listening for peer to peer conections on : ${P2P_PORT}`)
    }
    connectocket(socket){
        this.sockets.push(socket);
        console.log('Socket connected');
    }
}