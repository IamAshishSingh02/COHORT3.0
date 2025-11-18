export const Button = ({disabled, onClick, children}) => {
  return(
    <span onClick={onClick} className={`px-35 py-3 text-white cursor-pointer ${disabled ? "bg-blue-200" : "bg-green-400"} rounded-xl text-xl`}>
      {children}
    </span>
  )
}