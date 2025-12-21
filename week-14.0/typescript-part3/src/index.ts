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

// // Records in ts
// type User = Record<string, {id: number, name: string, age: number}> // Record<key type, value type>
// const users: User = {
//   "abc@1": {
//     id: 1,
//     name: "Ashish",
//     age: 21
//   }
// }

// // Maps 
// type User = {
//   id: number,
//   name: string,
//   age: number
// }
// const users = new Map<string, User>()
// users.set("abc@1", {id: 1, name: "Ashish", age: 21})
// users.set("abc@2", {id: 2, name: "As", age: 25})
// console.log(users.get("abc@1"));
// users.delete("abc@1")

// // Exclude
// type EventType = 'click' | 'scroll' | 'mousemove'
// type ExcludeEvent = Exclude<EventType, 'scroll'> // 'click' | 'mousemove'
// const HandleEvent = (event: ExcludeEvent) => {
//   console.log(`handling Event: ${event}`)
// }
// HandleEvent('click')

// Type inference in zod

import { z } from 'zod';  // Zod for schema validation
import express from "express";  // Express for the web server

// Initializing the Express app
const app = express();

// Define the schema for profile update using Zod
const userProfileSchema = z.object({
  name: z.string().min(1),  // Name must be a non-empty string
  email: z.string().email(),  // Email must be a valid email address
  age: z.number().min(18).optional(),  // Age is optional but must be 18 or older if provided
});

// Type inference for the FinalUserSchema from the userProfileSchema
type FinalUserSchema = z.infer<typeof userProfileSchema>;

// Define the PUT endpoint for updating user data
app.put("/user", (req, res) => {
  // Safe parsing of the request body according to the defined schema
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body;

  // If the validation fails, return a 411 status code (Length Required)
  if (!success) {
    res.status(411).json({});  // Send empty response in case of validation failure
    return;
  }

  // Placeholder for updating the database with the validated data
  // Update the user in the database here using updateBody data

  // Respond with a success message after updating the user
  res.json({
    message: "User updated"  // Send success message
  });
});

// Start the Express app on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');  // Log when the server is ready
});