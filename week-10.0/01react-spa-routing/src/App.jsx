import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to={"/"}>
            <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Allen</button>
          </Link>
          <Link to={"/neet/online-coaching-class-11"}>
            <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Class 11</button>
          </Link>
          <Link to={"/neet/online-coaching-class-12"}>
            <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Class 12</button>
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}




const Landing = () => {
  return(
    <div style={{color: "white"}}>
      <h2>Welcome to Allen</h2>
    </div>
  )
}
const Class11Program = () => {
  return(
    <div style={{color: "white"}}>
      <h2>NEET program for Class 11th</h2>
    </div>
  )
}

const Class12Program = () => {
  const navigate = useNavigate();

  const redirectUser = () => {
    navigate("/")
  }
  
  return(
    <div style={{color: "white"}}>
      <h2>NEET program for Class 12th</h2>
      <button onClick={redirectUser} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Go back to Landing Page</button>
    </div>
  )
}

export default App