import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";

function App() {
  return(
    < RecoilRoot>
      <Counter /> 
    </RecoilRoot>
  )
}

const Counter = () => {
  return(
    <>
      <div>
        <Count />
        <Increase />
        <Decrease />  
      </div>
    </>
  )
}

const Count = () => {
  const count = useRecoilValue(counterAtom)

  return(
    <div style={{marginLeft: "85px"}}>
      {count}
    </div>
  )
}

const Increase = () => {
  const setCount = useSetRecoilState(counterAtom)

  return(
    <button onClick={() => setCount(c => c + 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Increase</button>
  )
}

const Decrease = () => {
  const setCount = useSetRecoilState(counterAtom)

  return(
    <button onClick={() => setCount(c => c - 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Decrease</button>
  )
}

export default App