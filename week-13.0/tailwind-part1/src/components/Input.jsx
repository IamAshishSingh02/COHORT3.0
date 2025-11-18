export const Input = ({onClick, type, placeholder}) => {
  return(
    <span onClick={onClick} className={`px-4 py-4 text-white cursor-pointer bg-blue-500 rounded-2xl text-xl`}>
      <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none" />
    </span>
  )
}