import { useEffect, useState } from "react";

function App() {
  const[counterVisible, setCounterVisible] = useState(true)

  useEffect(() => {
    const visibilityTimer = setInterval(() => {
      setCounterVisible(c => !c)
    }, 5000)
    return () => clearInterval(visibilityTimer)
  }, [])

  return (
    <>
      {counterVisible && <Counter></Counter>}
    </>
  );
}

function Counter() {
  const[count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App;