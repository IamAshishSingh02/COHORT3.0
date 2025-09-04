import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  function addPost() {
    setPosts([...posts, {
      name: "Ashish Singh",
      subtitle: "500 followers",
      time: "2m ago",
      image: "/profile-pic1.jpeg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  const postComponent = posts.map(post => <PostComponent 
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
  />)

  return (
    <div style={{ background: "#dfe6e9", minHeight: "100vh" }}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        {postComponent}
      </div>
    </div>
  )
}

export default App;