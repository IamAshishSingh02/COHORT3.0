import { useEffect, useState } from "react";

// UseState And Component
// import { PostComponent } from "./Post";

// function App() {
//   const [posts, setPosts] = useState([]);

//   function addPost() {
//     setPosts([...posts, {
//       name: "Ashish Singh",
//       subtitle: "500 followers",
//       time: "2m ago",
//       image: "/profile-pic1.jpeg",
//       description: "What to know how to win big? Check out how these folks won $6000 in bounties."
//     }])
//   }

//   const postComponent = posts.map(post => <PostComponent 
//     name = {post.name}
//     subtitle = {post.subtitle}
//     time = {post.time}
//     image = {post.image}
//     description = {post.description}
//   />)

//   return (
//     <div style={{ background: "#dfe6e9", minHeight: "100vh" }}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
//         {postComponent}
//       </div>
//     </div>
//   )
// }

// UseEffect And Dependency Array
const App = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    console.log("Count updated to " + count)
  }, [count])

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <div style={{ position: "relative", display: "inline-block",  }}>
        <img
          src="/notifications.svg"
          style={{ width: 30, cursor: "pointer" }}
          alt="bell-icon"
        />

        <span
          style={{
            position: "absolute",
            top: "-8px",
            left: "14px",
            background: "red",
            color: "white",
            borderRadius: "20px",
            padding: "2px 4px",
            fontSize: "14px",
            fontWeight: "bold",
            minWidth: "15px",
            textAlign: "center"
          }}
        >
          {count}
        </span>
      </div>
    </div>
  );
}
  
export default App;