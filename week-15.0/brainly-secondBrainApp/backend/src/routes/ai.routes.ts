import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { askBrainController } from "../controllers/ai.controller";

const router = Router()

router.post("/ask", authMiddleware, askBrainController)

export default router