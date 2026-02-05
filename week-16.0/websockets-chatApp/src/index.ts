import {WebSocketServer, WebSocket} from 'ws'

const wss = new WebSocketServer({port: 8080})

let userCount = 0
let allSockets: WebSocket[] = []

wss.on("connection", (socket) => {
  allSockets.push(socket)
  userCount += 1
  console.log(`User connected #${userCount}`)

  socket.on('message', (event) => {
    console.log(`message recieved: ${event.toString()}`)
    allSockets.forEach(s => {
      s.send(`${event.toString()} : sent form the server`)
    });
  })
})