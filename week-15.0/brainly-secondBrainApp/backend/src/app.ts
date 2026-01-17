import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes"
import contentRoutes from "./routes/content.routes"
import brainRoutes from "./routes/brain.routes"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/content", contentRoutes)
app.use("/api/v1/brain", brainRoutes)

export default app