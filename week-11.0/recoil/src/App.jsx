// Recoil

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counter";
import { isEvenSelector } from "./store/selectors/isEvenSelector";

// function App() {
//   return(
//     < RecoilRoot>
//       <Counter /> 
//     </RecoilRoot>
//   )
// }

// const Counter = () => {
//   return(
//     <>
//       <div>
//         <Count />
//         <Increase />
//         <Decrease />  
//       </div>
//     </>
//   )
// }

// const Count = () => {
//   const count = useRecoilValue(counterAtom)

//   return(
//     <div style={{marginLeft: "85px"}}>
//       {count}
//     </div>
//   )
// }

// const Increase = () => {
//   const setCount = useSetRecoilState(counterAtom)

//   return(
//     <button onClick={() => setCount(c => c + 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Increase</button>
//   )
// }

// const Decrease = () => {
//   const setCount = useSetRecoilState(counterAtom)

//   return(
//     <button onClick={() => setCount(c => c - 1)} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Decrease</button>
//   )
// }

// Memo Implementation

import { useState, useEffect, memo } from "react";


// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// const Counter = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount(c => c + 1); 
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [])

//   return (
//     <div>
//       <Count count={count} />
//       <Increase setCount={setCount} />
//       <Decrease setCount={setCount} />
//     </div>
//   );
// }

// const Count = memo(function({ count }) {
//   return (
//     <div>
//       {count}
//     </div>
//   )
// })

// const Decrease = memo(function({ setCount }) {
//   return (
//     <button onClick={() => setCount(c => c - 1)}>Decrease</button>
//   ); 
// });

// const Increase = memo(function({ setCount }) {
//   return (
//     <button onClick={() => setCount(c => c + 1)}>Increase</button>
//   )
// })


// Selector Implementation

const App = () => {
  return(
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  )
}

const Buttons = () => {
  const setCount = useSetRecoilState(counterAtom)

  return(
    <div>
      <button onClick={() => setCount(c => c + 2)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  )
}

const Counter = () => {
  const count = useRecoilValue(counterAtom)

  return(
    <div>
      {count}
    </div>
  )
}

const IsEven = () => {
  const even = useRecoilValue(isEvenSelector)

  return(
    <div>
      {even ? "Even" : "Odd"}
    </div>
  )
}

export default App