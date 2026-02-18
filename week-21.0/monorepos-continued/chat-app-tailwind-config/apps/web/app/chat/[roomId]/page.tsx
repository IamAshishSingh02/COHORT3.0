import { TextInput } from "@repo/ui/text-input";

export default async function ChatRoom({params}: {params: {roomId: string}}){
  const roomId = (await params).roomId
  return(
    <div className="bg-black text-white h-screen flex flex-col">

      <div className="border-b border-white p-4">
        Room ID: <span className="font-semibold">{roomId}</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        Chats
      </div>

      <div className="border-t border-white p-4 flex gap-2">
        <input placeholder="Message" className="flex-1 bg-gray-900 p-3 rounded-lg outline-none" />
        <button className="bg-green-700 px-4 rounded-lg hover:bg-green-800">Send</button>
      </div>
    </div>
  )
}