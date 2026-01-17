import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { generateShareLink, getSharedBrain, revokeShareLink } from "../controllers/brain.controller";

const router = Router();

router.post("/share", authMiddleware, generateShareLink)
router.delete("/share", authMiddleware, revokeShareLink)
router.get("/share/:token", getSharedBrain)

export default router