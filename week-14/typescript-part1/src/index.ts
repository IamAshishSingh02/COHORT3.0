// let x: number = 1
// console.log(x)

// number, string, boolean, undefined, any ...

// const greet = (name: string) => {
//   console.log("Hello " + name);
// }
// greet("Ashish")
// greet("As")


// const sum = (a: number, b: number) => {
//   return a + b
// }
// console.log(sum(2, 3));

// const delayedCall = (fn: () => void) => {
//   setTimeout(fn, 1000)
// }
// delayedCall(() => {console.log("Hi There");
// })

const user = {
  name: "Ashish",
  age: 21
}
const greet = (user: {
  name: string,
  age: number
}) => {
  console.log("Hello " + user.name);
}
greet(user)