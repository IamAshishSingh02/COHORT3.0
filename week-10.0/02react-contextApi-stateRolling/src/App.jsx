import { useState } from "react"

const App = () => {
  return(
    <>
      <div>
        <LightBulb />
      </div>
    </>
  )
}

const LightBulb = () => {
  const [bulbOn, setBulbOn] = useState(true)
  return(
    <>
      <div>
        <BulbState bulbOn = {bulbOn} />
        <ToggleBulbState setBulbOn = {setBulbOn} />
      </div>
    </>
  )
}

const BulbState = ({bulbOn}) => {
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

const ToggleBulbState = ({setBulbOn}) => {
  const toggle = () => {
    setBulbOn(s => !s)
  }

  return(
    <>
      <div>
        <button onClick={toggle} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Toogle the bulb</button>
      </div>
    </>
  )
}

export default App