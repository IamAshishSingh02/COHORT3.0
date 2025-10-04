import { useState } from "react";

function App() {
  return(
    <>
      <Counter /> 
    </>
  )
}

const Counter = () => {
  const [count, setCount] = useState(0)

  return(
    <>
      <div>
        <Count count = {count} />
        <Increase setCount = {setCount} />
        <Decrease setCount = {setCount} />  
      </div>
    </>
  )
}

const Count = ({count}) => {
  return(
    <div style={{marginLeft: "85px"}}>
      {count}
    </div>
  )
}

const Increase = ({setCount}) => {
  return(
    <button onClick={() => setCount(c => c + 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Increase</button>
  )
}

const Decrease = ({setCount}) => {
  return(
    <button onClick={() => setCount(c => c - 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Decrease</button>
  )
}

export default App