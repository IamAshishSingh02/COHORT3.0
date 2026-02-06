import { useEffect, useRef, useState } from "react"

type ChatMessage = {
  text: string
  mine: boolean
}

const generateRoomId = () => {
  return Math.random().toString(36).substring(2, 8)
}

const App = () => {
  const wsRef = useRef<WebSocket | null>(null)

  const [connected, setConnected] = useState(false)
  const [joined, setJoined] = useState(false)

  const [roomId, setRoomId] = useState("")
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])

  const resetState = () => {
    setConnected(false)
    setJoined(false)
    setMessages([])
    setInput("")
    setRoomId("")
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    wsRef.current = ws

    ws.onopen = () => setConnected(true)

    ws.onmessage = (event) => {
      setMessages(prev => [...prev, { text: event.data, mine: false }])
    }

    ws.onclose = resetState
    ws.onerror = resetState

    return () => ws.close()
  }, [])

  const joinRoom = (id: string) => {
    if (!id || !wsRef.current) return

    wsRef.current.send(JSON.stringify({
      type: "join",
      payload: { roomId: id }
    }))

    setRoomId(id)
    setJoined(true)
  }

  const sendMessage = () => {
    if (!input.trim() || !wsRef.current) return

    wsRef.current.send(JSON.stringify({
      type: "chat",
      payload: { message: input }
    }))

    setMessages(prev => [...prev, { text: input, mine: true }])
    setInput("")
  }

  // ---------------- UI ----------------

  if (!connected) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        Connecting...
      </div>
    )
  }

  // CREATE / JOIN SCREEN
  if (!joined) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <div className="bg-gray-900 p-6 rounded-lg w-[420px] space-y-6">

          <h2 className="text-xl font-semibold text-center">
            Chat Rooms
          </h2>

          {/* CREATE ROOM */}
          <div className="space-y-2">
            <button
              onClick={() => joinRoom(generateRoomId())}
              className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700"
            >
              Create Room
            </button>
            <p className="text-sm text-gray-400 text-center">
              A room ID will be generated for you to share
            </p>
          </div>

          <div className="border-t border-gray-700 pt-4 space-y-2">
            <input
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter Room ID"
              className="w-full p-3 bg-black rounded outline-none"
            />
            <button
              onClick={() => joinRoom(roomId)}
              className="w-full bg-green-700 py-2 rounded hover:bg-green-800"
            >
              Join Room
            </button>
          </div>

        </div>
      </div>
    )
  }

  // CHAT SCREEN
  return (
    <div className="h-screen bg-black text-white flex flex-col">

      <div className="border-b border-gray-800 p-4">
        Room ID: <span className="font-semibold">{roomId}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-lg max-w-xs w-fit ${
              msg.mine ? "ml-auto bg-blue-600" : "bg-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-800 p-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 bg-gray-900 p-3 rounded-lg outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-green-700 px-4 rounded-lg hover:bg-green-800"
        >
          Send
        </button>
      </div>

    </div>
  )
}

export default App
