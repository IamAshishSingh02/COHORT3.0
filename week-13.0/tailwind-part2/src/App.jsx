function App() {
  return (
    <>
        <div className="h-screen bg-white dark:bg-black text-black dark:text-white">
          <button onClick={() => {
            document.querySelector("html").classList.toggle("dark")
          }}>
            Dark Mode
          </button>
        </div>
    </>
  )
}

export default App