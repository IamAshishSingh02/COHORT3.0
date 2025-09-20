import { useState } from "react"

// Rolling up the State and Unoptimal Rerenders
// const App = () => {
//   return(
//     <>
//       <div>
//         <Light />
//       </div>
//     </>
//   )
// }

// const Light = () => {
//   const [bulbOn, setBulbOn] = useState(true)
//   return(
//     <>
//       <div>
//         <LightBulb bulbOn = {bulbOn} />
//         <LightSwitch setBulbOn = {setBulbOn} />
//       </div>
//     </>
//   )
// }

// const LightBulb = ({bulbOn}) => {
//   const img1 = <img style={{width: "30px"}} src="/Light_on.webp" /> 
//   const img2 = <img style={{width: "30px"}} src="/Light_off.webp" />
  
//   return(
//     <>
//       <div style={{margin: "10px"}}>
//         {bulbOn ? img1 : img2 }
//       </div>
//     </>
//   )
// }

// const LightSwitch = ({setBulbOn}) => {
//   const toggle = () => {
//     setBulbOn(s => !s)
//   }

//   return(
//     <>
//       <div>
//         <button onClick={toggle} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Toggle the bulb</button>
//       </div>
//     </>
//   )
// }

// Prop Drilling
const App = () => {
  const [bulbOn, setBulbOn] = useState(true)

  return(
    <>
      <div>
        <Light bulbOn = {bulbOn} setBulbOn = {setBulbOn} />
      </div>
    </>
  )
}

const Light = ({bulbOn, setBulbOn}) => {
  return(
    <>
      <div>
        <LightBulb bulbOn = {bulbOn} />
        <LightSwitch setBulbOn = {setBulbOn} />
      </div>
    </>
  )
}

const LightBulb = ({bulbOn}) => {
  const img1 = <img style={{width: "30px"}} src="/lightbulb_on.webp" /> 
  const img2 = <img style={{width: "30px"}} src="/lightbulb_off.webp" />
  
  return(
    <>
      <div style={{margin: "10px"}}>
        {bulbOn ? img1 : img2 }
      </div>
    </>
  )
}

const LightSwitch = ({setBulbOn}) => {
  const toggle = () => {
    setBulbOn(s => !s)
  }

  return(
    <>
      <div>
        <button onClick={toggle} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Toggle the bulb</button>
      </div>
    </>
  )
}

export default App