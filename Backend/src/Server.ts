import { WebSocketServer } from "ws";
const wss = new WebSocketServer({port:8080})

let socketmap = new Map();


wss.on('connection', (socket)=>{
    console.log('Websocket connection established.')


    socket.on('message', (data)=>{
        let parsedmessage = JSON.parse(data.toString())
        // parsedmessage is an object.

        if(parsedmessage.type === 'join'){
            
            socketmap.set(parsedmessage.payload.roomId,socket)
        }
        else{
            // parsedmessage.type === chat
            const currroom = parsedmessage.payload.roomID
            
            




        }




    })

    



})


