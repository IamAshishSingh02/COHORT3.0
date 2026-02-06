import { WebSocketServer, WebSocket } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

interface User {
  socket: WebSocket,
  room: string
}

interface JoinMessage {
  type: 'join'
  payload: {
    roomId: string,
  }
}

interface ChatMessage {
  type: 'chat'
  payload: {
    message: string
  }
}

type IncomingMessage = JoinMessage | ChatMessage

let allSockets: User[] = []

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage: IncomingMessage = JSON.parse(message.toString())

    if(parsedMessage.type === 'join'){
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId
      })
    }

    else if(parsedMessage.type === 'chat'){
      const sender = allSockets.find(u => u.socket === socket)

      if(!sender) return

      const message = parsedMessage.payload.message
      if(!message) return

      allSockets.forEach(u => {
        if(u.room ===sender.room && u.socket != socket){
          u.socket.send(message)
        }
      });
    }
  })

  socket.on("close", () => {
    allSockets = allSockets.filter(u => u.socket !== socket)
  })
})
