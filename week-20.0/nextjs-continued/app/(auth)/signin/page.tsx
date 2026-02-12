export default function Signup(){
  return (
    <div className="h-165 w-screen flex flex-col justify-center items-center">
      Sign In
      <input type="text" placeholder="username" className="rounded-xl p-2" />
      <input type="text" placeholder="password" className="rounded-xl p-2 mt-2" />
      <button className="border rounded-xl p-2 mt-2">Sign In</button>
    </div>
  )
}