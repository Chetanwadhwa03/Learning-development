import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });
let socketarr = [];
wss.on('connection', (socket) => {
    console.log('Websocket connection established.');
    socketarr.push(socket);
    socket.on('message', (data) => {
        socketarr.forEach((s) => {
            s.send(data.toString());
        });
    });
});
//# sourceMappingURL=Server.js.map