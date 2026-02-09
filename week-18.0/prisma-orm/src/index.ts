import "dotenv/config";
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import express from 'express'

const app = express()

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany()
  res.status(200).json({
    message: "users fetched successfully",
    users
  })
})

app.get("/todos/:id", async (req, res) => {
  const id = Number(req.params.id)
  const todos = await prisma.user.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      username: true,
      todos: true
    }
  })
  res.status(200).json({
    message: "todos fetched successfully",
    todos
  })
})

app.listen(3000)

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL 
});
const prisma = new PrismaClient({ adapter });

// const createUser = async () => {
//   await prisma.user.create({
//     data: {
//       username: "Son Goku",
//       password: "123123",
//       age: 21,
//       city: "Pune"
//     }
//   })
// }

// const createUser = async () => {
//   await prisma.user.create({
//     data: {
//       username: "Ashish Singh",
//       password: "123123",
//       age: 21,
//       city: "Pune"
//     }
//   })
// }

// const createTodo = async () => {
//   await prisma.todo.create({
//     data: {
//       title: "gym",
//       description: "go to gym",
//       done: true,
//       userId: 1
//     }
//   })
// }

// const createTodo = async () => {
//   await prisma.todo.create({
//     data: {
//       title: "code",
//       description: "do dev",
//       done: false,
//       userId: 1
//     }
//   })
// }

// const updateUser = async () => {
//   await prisma.user.update({
//     where: {
//       id: 1
//     },
//     data: {
//       username: "Son Goku Tester",
//       password: "123123",
//       age: 21,
//       city: "Pune"
//     }
//   })
// }

// const deleteUser = async () => {
//   await prisma.user.delete({
//     where: {
//       id: 1
//     }
//   })
// }

// const readUser = async () => {
//   const user = await prisma.user.findMany({
//     select: {
//       id: true,
//       username: true,
//       age: true,
//       city: true
//     }
//   })
//   console.table(user)
// }

// const readUserAndTodos = async () => {
//   const userAndTodo = await prisma.user.findFirst({
//     where: {
//       id: 1
//     },
//     select: {
//       id: true,
//       username: true,
//       age: true,
//       city: true,
//       todos: true
//     }
//   })
//   console.log(userAndTodo)
// }

// createUser()
// createTodo()
// updateUser()
// deleteUser()
// readUser()
// readUserAndTodos()