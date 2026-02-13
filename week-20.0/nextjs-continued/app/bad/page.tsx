'use client'

import { useEffect, useState } from "react"

export default function(){
  const [count, setCount] = useState(0)
  const [currentTime, setCurrentTime] = useState<number | null>(null)
  // Hydration Error
  // const currentTime = Date.now()

  // Hydration Error fix
  useEffect(() => {
    setCurrentTime(Date.now())
  }, [])
  
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      <div>hello</div>
      <div>{count}</div>
      <div>
        <button onClick={() => {setCount(c => c + 1)}} className="border p-2 rounded-xl">Counter</button>
      </div>
      <div>
        {currentTime}
      </div>
    </div>
  )
}