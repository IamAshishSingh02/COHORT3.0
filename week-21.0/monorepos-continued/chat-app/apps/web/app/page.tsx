'use client'

import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomName, setRoomName] = useState('')
  const router = useRouter()
  return (
    <div>
      <TextInput placeholder="Room name" onChange={(e: any) => {
        setRoomName(e.target.value)
      }}></TextInput>

      <button onClick={() => {
        router.push(`/chat/${roomName}`)
      }}>Join Room</button>
    </div>
  );
}
