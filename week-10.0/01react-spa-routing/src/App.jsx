// import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

import { useRef } from "react"

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
//             <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
//             <Route path="*" element={<ErrorPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// const Layout = () => {
//   return(
//     <div style={{height: "100vh"}}>
//       <Header />

//       <div style={{height: "75vh"}}>
//         <Outlet />
//       </div>

//       <Footer />
//     </div>
//   )
// }

// const Header = () => {
//   return(
//     <div>
//       <Link to={"/"}>
//         <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Allen</button>
//       </Link>

//       <Link to={"/neet/online-coaching-class-11"}>
//         <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Class 11</button>
//       </Link>

//       <Link to={"/neet/online-coaching-class-12"}>
//         <button style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Class 12</button>
//       </Link>
//     </div>
//   )
// }

// const Footer = () => {
//   return(
//     <div style={{color: "white"}}>
//       ------------------------
//       <br />
//       Footer | Contact Us
//       <br />
//       ------------------------
//     </div>
//   )
// }

// const ErrorPage = () => {
//   return(
//     <div style={{color: "white"}}>
//       <h2>Content not Found</h2>
//     </div>
//   )
// }

// const LandingPage = () => {
//   return(
//     <div style={{color: "white"}}>
//       <h2>Welcome to Allen</h2>
//     </div>
//   )
// }
// const Class11Program = () => {
//   return(
//     <div style={{color: "white"}}>
//       <h2>NEET program for Class 11th</h2>
//     </div>
//   )
// }

// const Class12Program = () => {
//   const navigate = useNavigate();

//   const redirectUser = () => {
//     navigate("/")
//   }
  
//   return(
//     <div style={{color: "white"}}>
//       <h2>NEET program for Class 12th</h2>
//       <button onClick={redirectUser} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Go back to Landing Page</button>
//     </div>
//   )
// }

const App = () => {
  const inputRef = useRef() 

  const focusOnInput = () => {
    inputRef.current.focus()
  }
  return(
    <div style={{color: "white", margin: "20px"}}>
      Sign Up
      <br />
      <br />
      <input ref={inputRef} type="text" placeholder="Username" />
      <br />
      <br />
      <input type="text" placeholder="Password" />
      <br />
      <br />
      <button onClick={focusOnInput} style={{padding: "8px", margin: "10px", border: "2px solid", borderRadius: "4px", cursor: "pointer", boxShadow: "2px 5px rgba(0, 0, 0, 0.2)"}}>Submit</button>
    </div>
  )
}

export default App