'use client'

import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Signin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  return ( 
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className=" bg-white flex flex-col px-4 py-6 border rounded-2xl justify-center items-center">
        <span className="text-xl p-2">Sign Up</span>
        
        <input type="text" placeholder="Username" onChange={(e) => {setUsername(e.target.value)}} className="border-2 rounded-xl p-2 m-1" />
        <input type="text" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} className="border-2 rounded-xl p-2 m-1" />

        <button onClick={() => {
          axios.post('http://localhost:3000/api/v1/signup',{
            username,
            password
          })

          router.push('/signin')
        }} className="bg-black text-white border rounded-xl px-4 py-2 mt-2 ">Sign Up</button>
      </div>
    </div>
  )
}
