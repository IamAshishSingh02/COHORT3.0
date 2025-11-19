// const App = () => {
//   return(
//     // <div className="flex justify-around">
//     //   <div className="bg-red-300">
//     //     Child 1
//     //   </div>
//     //   <div className="bg-blue-300">
//     //     Child 2
//     //   </div>
//     //   <div className="bg-green-300">
//     //     Child 3
//     //   </div>
//     // </div>


//     // <div className="grid grid-cols-12">
//     //   <div className="bg-red-300 col-span-4">
//     //     Child 1
//     //   </div>
//     //   <div className="bg-blue-300 col-span-5">
//     //     Child 2
//     //   </div>
//     //   <div className="bg-green-300 col-span-3">
//     //     Child 3
//     //   </div>
//     // </div>

//     // <div className="xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300">
//     //   Hi there
//     // </div>

//     <div className="sm:grid grid-cols-12 ">
//       <div className="bg-blue-300 col-span-4">
//         Child 1
//       </div>
//       <div className="bg-red-300 col-span-5">
//         Child 2
//       </div>
//       <div className="bg-green-300 col-span-3">
//         Child 3
//       </div>
//     </div>
//   )
// }

// Project TailwindCss
// Colors => {blue- 200: #8094ad, 500: #19406a, 700: #002b5b}, {green- 400: #36c6c0}

import {Otp} from "./components/Otp"

const App = () => {
  return(
    <div className="h-screen bg-blue-700">
      <br /><br />
      <Otp number={6} />
    </div>
  )
}

export default App
