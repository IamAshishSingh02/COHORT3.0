import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 h-screen w-screen flex flex-col">

      <div className="bg-white p-2 flex flex-row justify-between">
        <div className="text-2xl font-semibold text-zinc-800 items">
          Todo App
        </div>

        <div>
          <button className="bg-gray-100 text-xl text-neutral-800 px-4 py-2 rounded-2xl"><Link href={'/signup'}>Sign up</Link></button>
          <button className="bg-neutral-800 text-xl text-gray-100 p-2 rounded-2xl ml-2"><Link href={'/signin'}>Sign in</Link></button>
        </div>

      </div>

      <div className="text-xl bg-white m-10 p-70 rounded-2xl flex flex-row justify-center items-center">
        
      </div>

    </div>
  );
}
