// // created a interface with optional field address - may or may not present - use q mark
// interface Address{
//     city: string,
//     country: string,
//     pincode: number
//   }
// interface User{
//   name: string,
//   age: number,
//   address?: Address
// }
// interface Office{
//   address: Address
// }
// // Address field present
// const user1 = {
//   name: "Ashish",
//   age: 21,
//   address: {
//     city: "Fatehgarh",
//     country: "India",
//     pincode: 209601
//   }
// }
// // Address field not present
// const user2 = {
//   name: "As",
//   age: 21
// }

// // Creating a class that implements the interface
// interface User{
//   name: string,
//   age: number,
//   isLegal(): boolean // isLegal: () => boolean
// }
// class Manager implements User{
//   constructor(public name: string, public age:number){
//     this.name = name
//     this.age = age
//   }

//   isLegal(): boolean {
//     return this.age > 18
//   }
// }
// const user = new Manager("Ashish", 21) // Object of the class
// console.log(user.name);
// console.log(user.age);
// console.log(user.isLegal());

// Creating a class that extends the abstract class
abstract class User{
  constructor(public name: string){
    this.name = name
  }

  // Abstract method
  abstract greet(): string

  // Abstract classes can have default implementations which interfaces does not have
  hello(){
    console.log("Hi There");
  }
}
class Employee extends User{
  constructor(public name: string){
    super(name)
    this.name = name
  }

  greet(){
    return("Hi " + this.name);
  }
}