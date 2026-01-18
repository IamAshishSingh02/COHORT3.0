import "./config/env"
import app from "./app"
import { connectDb } from "./config/db"

const PORT = process.env.PORT

const startServer = async () => {
  await connectDb()

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on ${PORT}`)
  })
}

startServer()