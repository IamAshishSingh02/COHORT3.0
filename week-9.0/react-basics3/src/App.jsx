// Children Props
// const App = () => {
//   return(
//     <div>
//       <Card>
//         <div> 
//            <h2>Card Title</h2>
//            <p>This is some content inside card.</p>
//         </div>
//       </Card>

//       <Card>
//         <div>
//           <h2>Another Card</h2>
//           <p>Card with different content.</p>
//         </div>
//       </Card>
//     </div>
//   )
// }

// const Card = ({children}) => {
//   return(
//     <div style={{border: "1px solid #ccc",borderRadius: 4, padding: "20px", margin: "10px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}>
//       {children}
//     </div>
//   )
// }

// Lists And Keys
const App = () => {
  const todos = [{
    key: 1, 
    title: "Go to gym",
    done: false
  }, {
    key: 2,
    title: "Eat food",
    done: true
  }]

  const todosComponent = todos.map(todo => <Todo key = {todo.key} title = {todo.title} done = {todo.done} />)

  return(
    <div>
      {todosComponent}
    </div>
  )
}

const Todo = ({title, done}) => {
  return(
    <div>
      {title} - {done ? "Done" : "Not Done"}
    </div>
  )
}

export default App