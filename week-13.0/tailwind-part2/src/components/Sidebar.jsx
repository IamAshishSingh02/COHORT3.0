export const Sidebar = () => {
  return(
    <div className="flex">
      <div className="transition-all duration-200 bg-red-600 h-screen md:w-70 w-10">
        Sidebar
      </div>

      <div className="bg-green-500 w-full h-screen">
        Content
      </div>
    </div>
  )
}