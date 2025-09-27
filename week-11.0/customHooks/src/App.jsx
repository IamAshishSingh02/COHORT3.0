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
  const [currentPost, setCurrentPost] = useState(1)
  const {post, loading} = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost)

  if(loading) {
    return(
      <div>Loading....</div>
    )
  }

  return(
    <>
      <div>
        <button onClick={() => setCurrentPost(1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Post 1</button>

        <button onClick={() => setCurrentPost(2)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Post 2</button>

        <button onClick={() => setCurrentPost(3)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Post 3</button>
      </div>

      <div>
        {JSON.stringify(post)}
      </div>
    </>
  )
}

export default App