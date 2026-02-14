// 'use client'

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// import Image from "next/image";
// import { json } from "zod";

// export default function Home() {
//   return(
//     <SessionProvider>
//       <RealHome />
//     </SessionProvider>
//   )
// }

// function RealHome(){
//   const session = useSession()
//   return (
//     <div>
//       {session.status === 'authenticated' && <button onClick={() => signOut()} className="border rounded-xl p-2 bg-white text-black cursor-pointer">Sign out</button>} 
//       {session.status === 'unauthenticated' && <button onClick={() => signIn()} className="border rounded-xl p-2 bg-black text-white cursor-pointer">Sign in</button>}
//       {JSON.stringify(session)}
//     </div>
//   );
// }

import { getServerSession } from "next-auth";

export default async function Home(){
  const session = await getServerSession()

  return(
    <div>
      {JSON.stringify(session)}
    </div>
  )
}