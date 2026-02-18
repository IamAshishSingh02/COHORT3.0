'use client'

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState('')
  const router = useRouter()
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">

      <div className="h-80 w-80 flex flex-col items-center justify-center border-2 border-white rounded-xl bg-green-800">
        
        <div>
          <TextInput placeholder="Room Id" onChange={(e: any) => {
            setRoomId(e.target.value)
          }}></TextInput>
        </div>
        
        <div>
          <button onClick={() => {
            roomId && router.push(`/chat/${roomId}`)
          }} className="text-white bg-black m-4 border-2 rounded-xl p-2 cursor-pointer hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed">Join Room</button>
        </div>

      </div>
      
    </div>
  );
}
