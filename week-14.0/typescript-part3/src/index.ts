// interface User{
//   id: string,
//   name: string,
//   age: number,
//   email: string,
//   password: string
// }
// // Pick lets you select set of properties from an existing type or interface
// type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
// // Partial lets you make all properties optional of an existing type or interface
// type UpdatePropsOptional = Partial<UpdateProps>
// // Readonly make the internal properties as const as well 
// type UserType = {
//   // one way of making read only
//   // readonly name: string,
//   // readonly age: number
//   name: string,
//   age: number
// }
// const user: Readonly<UserType> = {
//   name: "Ashish",
//   age: 21
// }
// // user.age = 22 // won't work because its read only

// Records in ts
type User = Record<string, {id: number, name: string, age: number}> // Record<key type, value type>
const users: User = {
  "abc@1": {
    id: 1,
    name: "Ashish",
    age: 21
  }
}