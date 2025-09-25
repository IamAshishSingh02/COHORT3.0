import { useEffect, useState } from "react"
import { useFetch } from "./hooks/useFetch"

// Custom Hook
// const useCounter = () => {
//   const [count, setCount] = useState(0)

//   const increaseCount = () => {
//     setCount(count => count + 1)
//   }

//   return {increaseCount, count}
// }

// const App = () => {
//  const {increaseCount, count} = useCounter()

//  return(
//   <div>
//     <button onClick={increaseCount} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Increase {count}</button>
//   </div>
//  )
// }

// useFetch Custom Hook
const App = () => {
  const post = useFetch("https://jsonplaceholder.typicode.com/posts/1")

  return(
    <div>
      {JSON.stringify(post)}
    </div>
  )
}

export default App