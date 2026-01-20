import express from "express"
import cors from "cors"
import authRoutes from "./routes/auth.routes"
import contentRoutes from "./routes/content.routes"
import brainRoutes from "./routes/brain.routes"
import aiRoutes from "./routes/ai.routes"

const app = express()

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use(express.json())

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/content", contentRoutes)
app.use("/api/v1/brain", brainRoutes)
app.use("/api/v1/ai", aiRoutes)

export default app