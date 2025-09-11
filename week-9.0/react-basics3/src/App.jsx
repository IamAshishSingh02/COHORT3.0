const App = () => {
  return(
    <div>
      <Card>
        <div> 
           <h2>Card Title</h2>
           <p>This is some content inside card.</p>
        </div>
      </Card>

      <Card>
        <div>
          <h2>Another Card</h2>
          <p>Card with different content.</p>
        </div>
      </Card>
    </div>
  )
}

const Card = ({children}) => {
  return(
    <div style={{border: "1px solid #ccc",borderRadius: 4, padding: "20px", margin: "10px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)" }}>
      {children}
    </div>
  )
}

export default App